// MOTOR DE SEO: Muda o Título, a Meta Descrição e a Tag Canonical consoante a página
  useEffect(() => {
    // O seu domínio principal oficial
    const baseUrl = 'https://nutricaocommarco.vercel.app';

    const seoData = {
      '/': { 
        title: 'Nutrição com Marco | Performance e Ciência', 
        desc: 'Especialista em Nutrição e Antropometria no RJ e Online. Performance física e saúde baseada em evidências científicas.' 
      },
      '/certificacoes': { 
        title: 'Currículo e Certificações | Nutrição com Marco', 
        desc: 'Conheça a trajetória técnica e as certificações internacionais ISAK do nutricionista Marco Aurélio Jr.' 
      },
      '/blog': { 
        title: 'Blog de Nutrição e Ciência | Nutrição com Marco', 
        desc: 'Conteúdo científico sobre antropometria, bioimpedância e emagrecimento real.' 
      },
      '/o_que_e_antropometria': { 
        title: 'O que é Antropometria? A Ciência Exata da Avaliação | Nutrição com Marco', 
        desc: 'Descubra o que é Antropometria e como a avaliação física ISAK revela sua real composição corporal, muito além da balança.' 
      },
      '/a_balanca_de_bioimpedancia_e_confiavel': { 
        title: 'A balança de bioimpedância é confiável? | Nutrição com Marco', 
        desc: 'Entenda se a balança de bioimpedância é confiável, como ela funciona e o que altera o seu percentual de gordura.' 
      }
    };

    const currentSEO = seoData[location.pathname] || seoData['/'];
    
    // 1. Atualiza o Título
    document.title = currentSEO.title;
    
    // 2. Atualiza a Meta Descrição para o Google
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = currentSEO.desc;

    // 3. Atualiza a Tag Canonical para evitar conteúdo duplicado no Google
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    // Remove a barra final se estiver na home para manter a URL limpa
    const cleanPath = location.pathname === '/' ? '' : location.pathname;
    canonicalLink.href = `${baseUrl}${cleanPath}`;

    setIsMenuOpen(false); // Fecha menu mobile ao trocar de página
  }, [location.pathname]);
