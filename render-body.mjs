import fs from 'fs';
import path from 'path';
import http from 'http';

// Preenche o <div id="root"></div> de cada HTML pré-renderizado com o
// conteúdo real da página (renderizado via Chromium headless), para que
// crawlers sem JavaScript vejam o artigo completo já na primeira resposta.
// O <head> (title/meta/schema) gerado pelo prerender.mjs é preservado
// integralmente — este script só substitui o corpo.
//
// No Vercel (build em Linux, sem as libs de sistema que o Chromium normal
// exige), usamos o binário do @sparticuz/chromium via puppeteer-core, feito
// sob medida pra ambientes serverless/restritos. Em qualquer outro lugar
// (dev local em Windows/Mac/Linux), usamos o pacote "puppeteer" completo,
// que já baixa um Chromium compatível com o sistema operacional local.
async function getLauncher() {
  if (process.env.VERCEL) {
    const [{ default: chromium }, { default: puppeteerCore }] = await Promise.all([
      import('@sparticuz/chromium'),
      import('puppeteer-core'),
    ]);
    const executablePath = await chromium.executablePath();
    return {
      launch: () =>
        puppeteerCore.launch({
          headless: true,
          args: chromium.args,
          defaultViewport: { width: 1280, height: 800 },
          executablePath,
        }),
    };
  }
  const { default: puppeteer } = await import('puppeteer');
  return {
    launch: () =>
      puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
      }),
  };
}

const distPath = path.resolve('dist');
const PORT = 4173;
const BLOCKED_HOSTS = [
  'googletagmanager.com',
  'google-analytics.com',
  'googleadservices.com',
  'doubleclick.net',
  'googlesyndication.com',
  'connect.facebook.net',
  'facebook.com',
];

function findHtmlFiles(dir, base = dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findHtmlFiles(full, base, out);
    } else if (entry.name.endsWith('.html')) {
      out.push(full);
    }
  }
  return out;
}

function fileToRoutePath(file) {
  const rel = path.relative(distPath, file).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'/index.html'.length);
  return '/' + rel.slice(0, -'.html'.length);
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

function startServer() {
  const server = http.createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (urlPath === '/') urlPath = '/index.html';

    const candidates = [
      path.join(distPath, urlPath),
      path.join(distPath, `${urlPath}.html`),
      path.join(distPath, urlPath, 'index.html'),
    ];

    const match = candidates.find((c) => fs.existsSync(c) && fs.statSync(c).isFile());
    const finalPath = match || path.join(distPath, 'index.html');

    const ext = path.extname(finalPath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    fs.createReadStream(finalPath).pipe(res);
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

async function run() {
  const htmlFiles = findHtmlFiles(distPath);
  console.log(`\n🎭 Renderizando ${htmlFiles.length} páginas via Chromium headless...`);

  const server = await startServer();
  const launcher = await getLauncher();
  const browser = await launcher.launch();

  let ok = 0;
  let skipped = 0;

  try {
    for (const file of htmlFiles) {
      const routePath = fileToRoutePath(file);
      const url = `http://localhost:${PORT}${routePath}`;
      const page = await browser.newPage();

      try {
        await page.setRequestInterception(true);
        page.on('request', (req) => {
          const reqUrl = req.url();
          if (BLOCKED_HOSTS.some((h) => reqUrl.includes(h))) {
            req.abort();
          } else {
            req.continue();
          }
        });

        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        await page.waitForSelector('footer', { timeout: 15000 });

        const rootHtml = await page.evaluate(() => {
          const root = document.getElementById('root');
          return root ? root.innerHTML : '';
        });

        if (!rootHtml || rootHtml.trim().length === 0) {
          console.warn(`⚠️  [${routePath}] root vazio após render, pulando.`);
          skipped++;
          continue;
        }

        const original = fs.readFileSync(file, 'utf-8');
        const updated = original.replace(
          '<div id="root"></div>',
          `<div id="root">${rootHtml}</div>`
        );

        if (updated === original) {
          console.warn(`⚠️  [${routePath}] marcador <div id="root"></div> não encontrado, pulando.`);
          skipped++;
          continue;
        }

        fs.writeFileSync(file, updated);
        ok++;
        console.log(`✅ [${routePath}] corpo renderizado e injetado (${(rootHtml.length / 1024).toFixed(0)} KB).`);
      } catch (err) {
        console.warn(`⚠️  [${routePath}] falhou (${err.message}), mantendo shell vazia.`);
        skipped++;
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`\n🎬 Renderização concluída: ${ok} páginas com corpo real, ${skipped} puladas (fallback pro shell vazio).\n`);
}

run().catch((err) => {
  console.error('⚠️  render-body.mjs falhou por completo — build continua com shells vazias:', err.message);
  process.exit(0);
});
