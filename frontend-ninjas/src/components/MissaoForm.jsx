export function MissaoForm({ nomeMissao, setNomeMissao, rankMissao, setRankMissao, idEditandoMissao, salvarMissao, limparFormularioMissao }) {
    return (
        <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fafafa' }}>
            <h2>{idEditandoMissao ? 'Editar Missão' : 'Adicionar Nova Missão'}</h2>
            <form onSubmit={salvarMissao} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input type="text" placeholder="Nome da Missão" value={nomeMissao} onChange={(e) => setNomeMissao(e.target.value)} required />
                <input type="text" placeholder="Rank da Missão (ex: Rank S, A, B)" value={rankMissao} onChange={(e) => setRankMissao(e.target.value)} required />

                <div style={{ display: 'flex', gap: '10px' }}>
                    <button type="submit" style={{ flex: 1, backgroundColor: '#2196F3', color: 'white', padding: '10px', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
                        {idEditandoMissao ? 'Atualizar Missão' : 'Cadastrar Missão'}
                    </button>
                    {idEditandoMissao && (
                        <button type="button" onClick={limparFormularioMissao} style={{ flex: 1, backgroundColor: '#f44336', color: 'white', padding: '10px', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}