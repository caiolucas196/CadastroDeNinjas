import { useEffect, useState } from 'react'
import './App.css'
import { NinjaForm } from './components/NinjaForm'
import { NinjaList } from './components/NinjaList'
import { MissaoForm } from './components/MissaoForm'
import { MissaoList } from './components/MissaoList'

function App() {
  const [ninjas, setNinjas] = useState([])
  const [idEditandoNinja, setIdEditandoNinja] = useState(null)
  const [nomeNinja, setNomeNinja] = useState('')
  const [emailNinja, setEmailNinja] = useState('')
  const [idadeNinja, setIdadeNinja] = useState('')
  const [rankNinja, setRankNinja] = useState('')
  const [imgUrlNinja, setImgUrlNinja] = useState('')
  const [missaoId, setMissaoId] = useState('')
  const [idDetalheAberto, setIdDetalheAberto] = useState(null)

  const [missoes, setMissoes] = useState([])
  const [idEditandoMissao, setIdEditandoMissao] = useState(null)
  const [nomeMissao, setNomeMissao] = useState('')
  const [rankMissao, setRankMissao] = useState('')
  const [idDetalheMissaoAberto, setIdDetalheMissaoAberto] = useState(null)

  const carregarNinjas = () => {
    fetch('http://localhost:8080/ninjas/listar')
        .then((res) => res.json())
        .then((dados) => setNinjas(dados))
        .catch((err) => console.error("Erro ao buscar ninjas:", err))
  }

  const carregarMissoes = () => {
    fetch('http://localhost:8080/missoes/listar')
        .then((res) => res.json())
        .then((dados) => setMissoes(dados))
        .catch((err) => console.error("Erro ao buscar missões:", err))
  }

  useEffect(() => {
    carregarNinjas()
    carregarMissoes()
  }, [])

  const salvarNinja = (e) => {
    e.preventDefault()
    const ninjaData = {
      nome: nomeNinja,
      email: emailNinja,
      idade: parseInt(idadeNinja),
      rank: rankNinja,
      imgUrl: imgUrlNinja,
      missoes: missaoId ? { id: parseInt(missaoId) } : null
    }

    const url = idEditandoNinja ? `http://localhost:8080/ninjas/alterar/${idEditandoNinja}` : 'http://localhost:8080/ninjas/criar'
    const metodo = idEditandoNinja ? 'PUT' : 'POST'

    fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ninjaData)
    })
        .then((res) => {
          if (res.ok) {
            alert(idEditandoNinja ? "Ninja atualizado!" : "Ninja cadastrado!")
            limparFormularioNinja()
            carregarNinjas()
          } else {
            alert("Erro ao salvar ninja.")
          }
        })
  }

  const deletarNinja = (id) => {
    if (window.confirm("Deseja deletar este ninja?")) {
      fetch(`http://localhost:8080/ninjas/deletar/${id}`, { method: 'DELETE' })
          .then((res) => { if (res.ok) { alert("Ninja deletado!"); carregarNinjas(); } })
    }
  }

  const prepararEdicaoNinja = (ninja) => {
    setIdEditandoNinja(ninja.id)
    setNomeNinja(ninja.nome)
    setEmailNinja(ninja.email)
    setIdadeNinja(ninja.idade)
    setRankNinja(ninja.rank)
    setImgUrlNinja(ninja.imgUrl || '')
    setMissaoId(ninja.missoes ? ninja.missoes.id : '')
  }

  const limparFormularioNinja = () => {
    setIdEditandoNinja(null)
    setNomeNinja('')
    setEmailNinja('')
    setIdadeNinja('')
    setRankNinja('')
    setImgUrlNinja('')
    setMissaoId('')
  }

  const salvarMissao = (e) => {
    e.preventDefault()
    const missaoData = { nome: nomeMissao, rank: rankMissao }
    const url = idEditandoMissao ? `http://localhost:8080/missoes/alterar/${idEditandoMissao}` : 'http://localhost:8080/missoes/criar'
    const metodo = idEditandoMissao ? 'PUT' : 'POST'

    fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(missaoData)
    })
        .then((res) => {
          if (res.ok) {
            alert(idEditandoMissao ? "Missão atualizada!" : "Missão cadastrada!")
            limparFormularioMissao()
            carregarMissoes()
            carregarNinjas()
          } else {
            alert("Erro ao salvar missão.")
          }
        })
  }

  const deletarMissao = (id) => {
    if (window.confirm("Deseja deletar esta missão?")) {
      fetch(`http://localhost:8080/missoes/deletar/${id}`, { method: 'DELETE' })
          .then((res) => { if (res.ok) { alert("Missão deletada!"); carregarMissoes(); carregarNinjas(); } })
    }
  }

  const prepararEdicaoMissao = (missao) => {
    setIdEditandoMissao(missao.id)
    setNomeMissao(missao.nome)
    setRankMissao(missao.rank)
  }

  const limparFormularioMissao = () => {
    setIdEditandoMissao(null)
    setNomeMissao('')
    setRankMissao('')
  }

  const toggleDetalhesNinja = (id) => setIdDetalheAberto(idDetalheAberto === id ? null : id)
  const toggleDetalhesMissao = (id) => setIdDetalheMissaoAberto(idDetalheMissaoAberto === id ? null : id)

  return (
      <div className="container" style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Painel de Controle - Cadastro de Ninjas 🥷</h1>

        <div style={{ marginBottom: '40px' }}>
          <NinjaForm
              nome={nomeNinja} setNome={setNomeNinja}
              email={emailNinja} setEmail={setEmailNinja}
              idade={idadeNinja} setIdade={setIdadeNinja}
              rank={rankNinja} setRank={setRankNinja}
              imgUrl={imgUrlNinja} setImgUrl={setImgUrlNinja}
              missaoId={missaoId} setMissaoId={setMissaoId}
              missoes={missoes}
              idEditandoNinja={idEditandoNinja}
              salvarNinja={salvarNinja}
              limparFormularioNinja={limparFormularioNinja}
          />

          <NinjaList
              ninjas={ninjas}
              idDetalheAberto={idDetalheAberto}
              toggleDetalhesNinja={toggleDetalhesNinja}
              prepararEdicaoNinja={prepararEdicaoNinja}
              deletarNinja={deletarNinja}
          />
        </div>

        <hr style={{ margin: '40px 0' }} />

        <div>
          <MissaoForm
              nomeMissao={nomeMissao} setNomeMissao={setNomeMissao}
              rankMissao={rankMissao} setRankMissao={setRankMissao}
              idEditandoMissao={idEditandoMissao}
              salvarMissao={salvarMissao}
              limparFormularioMissao={limparFormularioMissao}
          />

          <MissaoList
              missoes={missoes}
              idDetalheMissaoAberto={idDetalheMissaoAberto}
              toggleDetalhesMissao={toggleDetalhesMissao}
              prepararEdicaoMissao={prepararEdicaoMissao}
              deletarMissao={deletarMissao}
          />
        </div>
      </div>
  )
}

export default App