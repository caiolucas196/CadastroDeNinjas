export function MissaoForm({ nomeMissao, setNomeMissao, rankMissao, setRankMissao, idEditandoMissao, salvarMissao, limparFormularioMissao }) {
    return (
        <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #33333d', borderRadius: '8px', backgroundColor: '#161619' }}>
            <h2>{idEditandoMissao ? '⚠️ Editar Missão' : '📜 Cadastrar Nova Missão'}</h2>
            <form onSubmit={salvarMissao} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px' }}>
                <input type="text" placeholder="Nome da Missão (ex: Proteger o País das Ondas)" value={nomeMissao} onChange={(e) => setNomeMissao(e.target.value)} required />
                <input type="text" placeholder="Rank da Missão (ex: Rank S, A, B, C)" value={rankMissao} onChange={(e) => setRankMissao(e.target.value)} required />

                <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                    <button type="submit" style={{ flex: 1, backgroundColor: '#2563eb', color: '#fff', padding: '12px' }}>
                        {idEditandoMissao ? 'Atualizar Missão' : 'Criar Missão'}
                    </button>
                    {idEditandoMissao && (
                        <button type="button" onClick={limparFormularioMissao} style={{ flex: 1, backgroundColor: '#3f3f46', color: '#fff', padding: '12px' }}>
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}