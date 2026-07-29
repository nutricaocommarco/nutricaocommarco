import React, { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

export default function Avaliador({ userId }) {
  const [loading, setLoading] = useState(true)
  const [savingPerfil, setSavingPerfil] = useState(false)
  const [savingEquip, setSavingEquip] = useState(false)
  const [savingSenha, setSavingSenha] = useState(false)

  // Estados do Perfil do Avaliador 
  const [perfilId, setPerfilId] = useState(null)
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [instagram, setInstagram] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [planoStatus, setPlanoStatus] = useState('')

  // Estados dos Equipamentos
  const [equipId, setEquipId] = useState(null)
  const [plicometro, setPlicometro] = useState('')
  const [paquimetro, setPaquimetro] = useState('')
  const [trena, setTrena] = useState('')
  const [balanca, setBalanca] = useState('')
  const [estadiometro, setEstadiometro] = useState('')
  const [banco, setBanco] = useState('')
  const [alturaBanco, setAlturaBanco] = useState('')

  // Estados de Senha
  const [novaSenha, setNovaSenha] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')

  // Carregar Dados ao Abrir a Página
  useEffect(() => {
    async function carregarDadosAvaliador() {
      setLoading(true)

      // 1. Buscar dados na tabela 'avaliadores'
      const { data: perfilData, error: perfilError } = await supabase
        .from('avaliadores')
        .select('*')
        .eq('id', userId)
        .single()

      if (perfilError && perfilError.code !== 'PGRST116') {
        console.error('Erro ao buscar perfil:', perfilError.message)
      } else if (perfilData) {
        setPerfilId(perfilData.id)
        setNomeCompleto(perfilData.nome_completo || '')
        setEmail(perfilData.email || '')
        setTelefone(perfilData.telefone || '')
        setInstagram(perfilData.instagram || '')
        setEmpresa(perfilData.empresa || '')
        setPlanoStatus(perfilData.plano_status || 'Ativo')
      }

      // 2. Buscar dados na tabela 'equipamentos'
      const { data: equipData, error: equipError } = await supabase
        .from('equipamentos')
        .select('*')
        .eq('id_avaliador', userId)
        .single()

      if (equipError && equipError.code !== 'PGRST116') {
        console.error('Erro ao buscar equipamentos:', equipError.message)
      } else if (equipData) {
        setEquipId(equipData.id)
        setPlicometro(equipData.plicometro_adipometro || '')
        setPaquimetro(equipData.paquimetro || '')
        setTrena(equipData.trena || '')
        setBalanca(equipData.balanca || '')
        setEstadiometro(equipData.estadiometro || '')
        setBanco(equipData.banco || '')
        setAlturaBanco(equipData.altura_banco ?? '')
      }

      setLoading(false)
    }

    if (userId) {
      carregarDadosAvaliador()
    }
  }, [userId])

  // Salvar Perfil
  const handleSalvarPerfil = async (e) => {
    e.preventDefault()
    setSavingPerfil(true)

    const payload = {
      id: userId,
      nome_completo: nomeCompleto,
      email,
      telefone,
      instagram,
      empresa
    }

    const { error } = await supabase
      .from('avaliadores')
      .upsert(payload, { onConflict: 'id' })

    if (error) {
      alert('Erro ao salvar perfil: ' + error.message)
    } else {
      alert('Dados do Avaliador atualizados com sucesso!')
    }
    setSavingPerfil(false)
  }

  // Salvar Equipamentos
  const handleSalvarEquipamentos = async (e) => {
    e.preventDefault()
    setSavingEquip(true)

    const payload = {
      id_avaliador: userId,
      plicometro_adipometro: plicometro,
      paquimetro,
      trena,
      balanca,
      estadiometro,
      banco,
      altura_banco: alturaBanco !== '' ? parseFloat(alturaBanco) : null
    }

    let query
    if (equipId) {
      query = supabase.from('equipamentos').update(payload).eq('id', equipId)
    } else {
      query = supabase.from('equipamentos').insert([payload])
    }

    const { error } = await query

    if (error) {
      alert('Erro ao salvar equipamentos: ' + error.message)
    } else {
      alert('Informações dos equipamentos salvas com sucesso!')
    }
    setSavingEquip(false)
  }

  // Atualizar Senha
  const handleAtualizarSenha = async (e) => {
    e.preventDefault()
    if (!novaSenha || novaSenha.length < 6) {
      return alert('A nova senha deve ter pelo menos 6 caracteres.')
    }
    if (novaSenha !== confirmaSenha) {
      return alert('As senhas não coincidem.')
    }

    setSavingSenha(true)
    const { error } = await supabase.auth.updateUser({ password: novaSenha })

    if (error) {
      alert('Erro ao atualizar senha: ' + error.message)
    } else {
      alert('Senha atualizada com sucesso!')
      setNovaSenha('')
      setConfirmaSenha('')
    }
    setSavingSenha(false)
  }

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Carregando dados do avaliador...</div>
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Painel do Avaliador</h2>
        <p className="text-sm text-gray-500">Gerencie suas informações profissionais, equipamentos de precisão e segurança da conta.</p>
      </div>

      {/* SEÇÃO 1: DADOS PESSOAIS E PROFISSIONAIS */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
        <div className="border-b pb-3">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">1. Informações Profissionais</h3>
        </div>

        <form onSubmit={handleSalvarPerfil} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase">Nome Completo</label>
              <input type="text" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:ring-emerald-500 focus:border-emerald-500" placeholder="Seu nome" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase">E-mail</label>
              <input type="email" disabled value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm bg-gray-100 cursor-not-allowed" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase">Telefone / WhatsApp</label>
              <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:ring-emerald-500 focus:border-emerald-500" placeholder="(21) 99999-9999" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase">Instagram</label>
              <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:ring-emerald-500 focus:border-emerald-500" placeholder="@seuusuario" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase">Empresa / Clínica</label>
              <input type="text" value={empresa} onChange={(e) => setEmpresa(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:ring-emerald-500 focus:border-emerald-500" placeholder="Nome do espaço" />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button type="submit" disabled={savingPerfil} className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 shadow transition-all disabled:opacity-50">
              {savingPerfil ? 'Salvando...' : 'Salvar Perfil'}
            </button>
          </div>
        </form>
      </div>

      {/* SEÇÃO 2: EQUIPAMENTOS */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
        <div className="border-b pb-3">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">2. Equipamentos Utilizados (Padrão ISAK / Antropometria)</h3>
        </div>

        <form onSubmit={handleSalvarEquipamentos} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase">Plicômetro / Adipômetro</label>
              <input type="text" value={plicometro} onChange={(e) => setPlicometro(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:ring-emerald-500 focus:border-emerald-500" placeholder="Ex: Cescorf, Lange, Sanny..." />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase">Paquímetro</label>
              <input type="text" value={paquimetro} onChange={(e) => setPaquimetro(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:ring-emerald-500 focus:border-emerald-500" placeholder="Ex: Ósseo pequeno/grande Cescorf..." />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase">Trena Antropométrica</label>
              <input type="text" value={trena} onChange={(e) => setTrena(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:ring-emerald-500 focus:border-emerald-500" placeholder="Ex: Sanny metálica com retração..." />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase">Balança</label>
              <input type="text" value={balanca} onChange={(e) => setBalanca(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:ring-emerald-500 focus:border-emerald-500" placeholder="Ex: Filizola, Toledo, Omron..." />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase">Estadiômetro</label>
              <input type="text" value={estadiometro} onChange={(e) => setEstadiometro(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:ring-emerald-500 focus:border-emerald-500" placeholder="Ex: Portátil Sanny ou de parede..." />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase">Banco Antropométrico (Modelo/Marca)</label>
              <input type="text" value={banco} onChange={(e) => setBanco(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:ring-emerald-500 focus:border-emerald-500" placeholder="Ex: Caixa de madeira ISAK padrão" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase">Altura do Banco (cm)</label>
              <input type="number" step="0.1" value={alturaBanco} onChange={(e) => setAlturaBanco(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:ring-emerald-500 focus:border-emerald-500" placeholder="Ex: 40.5" />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button type="submit" disabled={savingEquip} className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 shadow transition-all disabled:opacity-50">
              {savingEquip ? 'Salvando...' : 'Salvar Equipamentos'}
            </button>
          </div>
        </form>
      </div>

      {/* SEÇÃO 3: ATUALIZAR SENHA */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
        <div className="border-b pb-3">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">3. Segurança da Conta (Atualizar Senha)</h3>
        </div>

        <form onSubmit={handleAtualizarSenha} className="space-y-4 max-w-xl">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase">Nova Senha</label>
            <input type="password" value={novaSenha} onChange={(e) => setNovaSenha(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:ring-emerald-500 focus:border-emerald-500" placeholder="Mínimo de 6 caracteres" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase">Confirme a Nova Senha</label>
            <input type="password" value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:ring-emerald-500 focus:border-emerald-500" placeholder="Digite a senha novamente" />
          </div>

          <div className="flex justify-end pt-2">
            <button type="submit" disabled={savingSenha} className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 shadow transition-all disabled:opacity-50">
              {savingSenha ? 'Atualizando...' : 'Atualizar Senha'}
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}