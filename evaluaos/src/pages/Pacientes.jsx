import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

export default function Pacientes({ userId }) {
  const navigate = useNavigate()

  const [pacientes, setPacientes] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  
  const [historicoPaciente, setHistoricoPaciente] = useState(null)
  const [avaliacoesList, setAvaliacoesList] = useState([])

  // Estado para controlar se estamos editando ou criando
  const [editingPacienteId, setEditingPacienteId] = useState(null)

  const [nome, setNome] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [sexo, setSexo] = useState('M')
  const [etnia, setEtnia] = useState('')
  const [nacionalidade, setNacionalidade] = useState('Brasileira')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [ocupacao, setOcupacao] = useState('')
  const [praticaEsporte, setPraticaEsporte] = useState(false)
  const [modalidadeEsportiva, setModalidadeEsportiva] = useState('')
  const [nivelPratica, setNivelPratica] = useState('')
  const [observacoes, setObservacoes] = useState('')
  const [saving, setSaving] = useState(false)

  const fetchPacientes = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('pacientes')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Erro ao buscar pacientes:', error)
    } else {
      setPacientes(data || [])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchPacientes()
  }, [])

  // Abre o modal limpo para um NOVO paciente
  const handleOpenNovoPaciente = () => {
    setEditingPacienteId(null)
    setNome('')
    setDataNascimento('')
    setSexo('M')
    setEtnia('')
    setNacionalidade('Brasileira')
    setEmail('')
    setTelefone('')
    setOcupacao('')
    setPraticaEsporte(false)
    setModalidadeEsportiva('')
    setNivelPratica('')
    setObservacoes('')
    setShowModal(true)
  }

  // Abre o modal preenchido para EDITAR um paciente
  const handleEditPaciente = (p) => {
    setEditingPacienteId(p.id)
    setNome(p.nome_completo || '')
    setDataNascimento(p.data_nascimento || '')
    setSexo(p.sexo || 'M')
    setEtnia(p.etnia || '')
    setNacionalidade(p.nacionalidade || 'Brasileira')
    setEmail(p.email || '')
    setTelefone(p.telefone || '')
    setOcupacao(p.ocupacao || '')
    setPraticaEsporte(p.pratica_esporte === true || p.pratica_esporte === 'true')
    setModalidadeEsportiva(p.modalidade_esportiva || '')
    setNivelPratica(p.nivel_pratica || '')
    setObservacoes(p.observacoes || '')
    setShowModal(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)

    const payload = {
      id_avaliador: userId,
      nome_completo: nome,
      data_nascimento: dataNascimento || null,
      sexo,
      etnia,
      nacionalidade,
      email,
      telefone,
      ocupacao,
      pratica_esporte: praticaEsporte,
      modalidade_esportiva: praticaEsporte ? modalidadeEsportiva : null,
      nivel_pratica: praticaEsporte ? nivelPratica : null,
      observacoes
    }

    if (editingPacienteId) {
      // MODO ATUALIZAÇÃO
      const { error } = await supabase
        .from('pacientes')
        .update(payload)
        .eq('id', editingPacienteId)

      if (error) {
        alert('Erro ao atualizar paciente: ' + error.message)
      } else {
        setShowModal(false)
        fetchPacientes()
      }
    } else {
      // MODO CRIAÇÃO (NOVO)
      const { error } = await supabase.from('pacientes').insert([payload])

      if (error) {
        alert('Erro ao cadastrar paciente: ' + error.message)
      } else {
        setShowModal(false)
        fetchPacientes()
      }
    }
    setSaving(false)
  }

  const handleVerHistorico = async (paciente) => {
    setHistoricoPaciente(paciente)
    const { data } = await supabase
      .from('avaliacoes')
      .select('id, data_avaliacao, equacao_de_regressao_escolhida, peso_paciente')
      .eq('id_paciente', paciente.id)
      .order('data_avaliacao', { ascending: false })

    setAvaliacoesList(data || [])
  }

  const handleDeleteAvaliacao = async (idAvaliacao) => {
    const digitado = window.prompt("⚠️ Ação irreversível!\n\nPara confirmar a exclusão desta avaliação, digite exatamente a palavra APAGAR:")
    
    if (digitado === "APAGAR") {
      try {
        await supabase.from('dados_calculados').delete().eq('id_avaliacao', idAvaliacao)
        const { error } = await supabase.from('avaliacoes').delete().eq('id', idAvaliacao)
        if (error) throw error

        setAvaliacoesList(avaliacoesList.filter(a => a.id !== idAvaliacao))
        alert('Avaliação excluída com sucesso!')
      } catch (err) {
        alert('Erro ao excluir avaliação: ' + err.message)
      }
    } else if (digitado !== null) {
      alert('Palavra incorreta. A exclusão foi cancelada.')
    }
  } 

  const handleDeletePaciente = async (idPaciente) => {
    const digitado = window.prompt("⚠️ ATENÇÃO: Isso apagará o paciente e todo o seu histórico!\n\nDigite APAGAR para confirmar:")
    
    if (digitado === "APAGAR") {
      const { error } = await supabase.from('pacientes').delete().eq('id', idPaciente)
      if (error) {
        alert('Erro ao excluir paciente: ' + error.message)
      } else {
        fetchPacientes()
        alert('Paciente excluído com sucesso!')
      }
    } else if (digitado !== null) {
      alert('Palavra incorreta. A exclusão foi cancelada.')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Meus Pacientes</h2>
          <p className="text-sm text-gray-500">Gerencie a lista de alunos e pacientes avaliados</p>
        </div>
        <button
          onClick={handleOpenNovoPaciente}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium text-sm transition-colors w-full sm:w-auto"
        >
          + Novo Paciente
        </button>
      </div>

      <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Carregando pacientes...</div>
        ) : pacientes.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            Nenhum paciente cadastrado ainda. Clique no botão acima para adicionar.
          </div>
        ) : (
          <>
            {/* --- VISÃO MOBILE --- */}
            <div className="block md:hidden">
              {pacientes.map((p) => {
                const ePraticante = p.pratica_esporte === true || p.pratica_esporte === 'true'
                return (
                  <div key={p.id} className="p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm uppercase">{p.nome_completo}</h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {p.sexo === 'M' ? 'Masculino' : 'Feminino'} • {p.telefone || p.email || '-'}
                        </p>
                      </div>
                      {ePraticante ? (
                        <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-semibold">
                          {p.modalidade_esportiva || 'Esporte'}
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-gray-50 text-gray-400 rounded-full text-[10px] font-semibold">
                          Sedentário
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <button 
                        onClick={() => handleVerHistorico(p)}
                        className="flex-1 text-center py-2 border border-gray-200 text-gray-600 hover:bg-gray-50 font-semibold text-xs rounded"
                      >
                        Histórico
                      </button>

                      <button 
                        onClick={() => navigate('/nova-avaliacao', { state: { paciente: p } })}
                        className="flex-1 text-center py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold text-xs rounded"
                      >
                        + Avaliação
                      </button>

                      <button 
                        onClick={() => handleEditPaciente(p)}
                        className="px-3 py-2 text-blue-500 border border-blue-100 hover:bg-blue-50 rounded transition-colors flex items-center justify-center"
                        title="Editar Paciente"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>
                      </button>

                      <button 
                        onClick={() => handleDeletePaciente(p.id)}
                        className="px-3 py-2 text-red-500 border border-red-100 hover:bg-red-50 rounded transition-colors flex items-center justify-center"
                        title="Excluir Paciente"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* --- VISÃO DESKTOP --- */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-600 text-xs uppercase font-semibold border-b">
                    <th className="p-4">Nome</th>
                    <th className="p-4">Sexo</th>
                    <th className="p-4">Contato</th>
                    <th className="p-4">Esporte</th>
                    <th className="p-4 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                  {pacientes.map((p) => {
                    const ePraticante = p.pratica_esporte === true || p.pratica_esporte === 'true'
                    return (
                      <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium text-gray-900 uppercase">{p.nome_completo}</td>
                        <td className="p-4">{p.sexo === 'M' ? 'Masculino' : 'Feminino'}</td>
                        <td className="p-4">{p.telefone || p.email || '-'}</td>
                        <td className="p-4">
                          {ePraticante ? (
                            <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">
                              {p.modalidade_esportiva || 'Sim'}
                            </span>
                          ) : (
                            <span className="text-gray-400">Não</span>
                          )}
                        </td>
                        <td className="p-4 text-right space-x-3 flex items-center justify-end gap-2">
                          <button onClick={() => handleVerHistorico(p)} className="text-gray-600 hover:text-gray-900 font-medium text-xs underline">
                            Histórico
                          </button>
                          
                          <button 
                            onClick={() => navigate('/nova-avaliacao', { state: { paciente: p } })} 
                            className="text-emerald-600 hover:text-emerald-800 font-medium text-xs bg-emerald-50 px-3 py-1.5 rounded"
                          >
                            + Nova Avaliação
                          </button>

                          <button onClick={() => handleEditPaciente(p)} className="p-1.5 text-blue-500 hover:bg-blue-50 rounded transition-colors inline-flex items-center" title="Editar Paciente">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                            </svg>
                          </button>

                          <button onClick={() => handleDeletePaciente(p.id)} className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors inline-flex items-center" title="Excluir Paciente">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* MODAL PACIENTE (CRIAÇÃO OU EDIÇÃO) */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden animate-fade-in">
            
            {/* Cabeçalho dinâmico */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-800">
                {editingPacienteId ? 'Atualizar Paciente' : 'Cadastrar Paciente'}
              </h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Corpo do Formulário */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto flex-1">
              
              {/* Nome Completo */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Nome do paciente"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                />
              </div>

              {/* Data Nascimento + Sexo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Data de Nascimento
                  </label>
                  <input
                    type="date"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-gray-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Sexo *
                  </label>
                  <select
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-gray-50/50"
                  >
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                  </select>
                </div>
              </div>

              {/* Etnia + Nacionalidade */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Etnia / Cor
                  </label>
                  <select
                    value={etnia}
                    onChange={(e) => setEtnia(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-gray-50/50"
                  >
                    <option value="">Selecione...</option>
                    <option value="Caucasiano">Caucasiano (Branco)</option>
                    <option value="Afrodescendente">Afrodescendente (Negro)</option>
                    <option value="Asiatico">Asiático</option>
                    <option value="Pardo">Pardo</option>
                    <option value="Indigena">Indígena</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Nacionalidade
                  </label>
                  <input
                    type="text"
                    value={nacionalidade}
                    onChange={(e) => setNacionalidade(e.target.value)}
                    placeholder="Brasileira"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  />
                </div>
              </div>

              {/* E-mail + Telefone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@exemplo.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Telefone
                  </label>
                  <input
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="(21) 99999-9999"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  />
                </div>
              </div>

              {/* Ocupação / Profissão */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Ocupação / Profissão
                </label>
                <input
                  type="text"
                  value={ocupacao}
                  onChange={(e) => setOcupacao(e.target.value)}
                  placeholder="Ex: Atleta, Estudante, Engenheiro..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                />
              </div>

              {/* Atividade Física */}
              <div className="pt-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={praticaEsporte}
                    onChange={(e) => setPraticaEsporte(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Pratica atividade física ou esporte regularmente?
                  </span>
                </label>
              </div>

              {/* Campos condicionais se praticar esporte */}
              {praticaEsporte && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-emerald-50/50 p-3 rounded-lg border border-emerald-100">
                  <div>
                    <label className="block text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                      Modalidade
                    </label>
                    <input
                      type="text"
                      value={modalidadeEsportiva}
                      onChange={(e) => setModalidadeEsportiva(e.target.value)}
                      placeholder="Ex: Musculação, Corrida..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                      Nível
                    </label>
                    <select
                      value={nivelPratica}
                      onChange={(e) => setNivelPratica(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
                    >
                      <option value="">Selecione...</option>
                      <option value="Recreacional">Recreacional</option>
                      <option value="Amador">Amador</option>
                      <option value="Profissional">Profissional / Elite</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Observações */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Observações
                </label>
                <textarea
                  rows="3"
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  placeholder="Anotações adicionais..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none resize-none"
                ></textarea>
              </div>

              {/* Botões do Rodapé (Texto dinâmico dependendo da ação) */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 shadow disabled:opacity-50 transition-colors"
                >
                  {saving ? 'Salvando...' : editingPacienteId ? 'Atualizar Paciente' : 'Salvar Paciente'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* MODAL DO HISTÓRICO DE AVALIAÇÕES */}
      {historicoPaciente && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 space-y-4 shadow-xl">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-bold text-gray-800">Histórico: {historicoPaciente.nome_completo}</h3>
              <button onClick={() => setHistoricoPaciente(null)} className="text-gray-400 hover:text-gray-600 text-lg font-bold">✕</button>
            </div>

            {avaliacoesList.length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-4">Nenhuma avaliação realizada ainda.</p>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                {avaliacoesList.map((a) => (
                  <div key={a.id} className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{new Date(a.data_avaliacao).toLocaleDateString('pt-BR')}</p>
                      <p className="text-xs text-gray-500">{a.equacao_de_regressao_escolhida || 'Sem Equação'} • {a.peso_paciente}kg</p>
                    </div>

                    <div className="flex gap-1.5 items-center">
                      <button
                        onClick={() => navigate('/nova-avaliacao', { state: { paciente: historicoPaciente, avaliacaoIdParaEditar: a.id } })}
                        className="p-1.5 text-blue-500 hover:bg-blue-50 rounded"
                        title="Editar Avaliação"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                      </button>
                      
                      <button onClick={() => handleDeleteAvaliacao(a.id)} className="p-1.5 text-red-500 hover:bg-red-50 rounded" title="Excluir Avaliação">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                      </button>
                      
                      <button
                        onClick={() => navigate('/laudo-antropometrico', { state: { avaliacaoId: a.id } })}
                        className="px-3 py-1 bg-emerald-600 text-white rounded text-xs font-medium hover:bg-emerald-700"
                      >
                        Ver Relatório
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}