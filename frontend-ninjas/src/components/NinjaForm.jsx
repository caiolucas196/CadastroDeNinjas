export function NinjaForm({
                              nome, setNome,
                              email, setEmail,
                              idade, setIdade,
                              rank, setRank,
                              imgUrl, setImgUrl,
                              missaoId, setMissaoId,
                              missoes,
                              idEditandoNinja,
                              salvarNinja,
                              limparFormularioNinja
                          }) {
    return (
        <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fafafa' }}>
            <h2>{idEditandoNinja ? 'Editar Ninja' : 'Adicionar Novo Ninja'}</h2>
            <form onSubmit={salvarNinja} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="number" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} required />
                <input type="text" placeholder="Rank (ex: Genin, Jounin)" value={rank} onChange={(e) => setRank(e.target.value)} required />
                <input type="url" placeholder="URL da Foto (opcional)" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />

                <select value={missaoId} onChange={(e) => setMissaoId(e.target.value)} style={{ padding: '8px' }}>
                    <option value="">Selecione uma Missão (Opcional)</option>
                    {missoes.map((m) => (
                        <option key={m.id} value={m.id}>
                            {m.nome} (Rank: {m.rank})
                        </option>
                    ))}
                </select>

                <div style={{ display: 'flex', gap: '10px' }}>
                    <button type="submit" style={{ flex: 1, backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
                        {idEditandoNinja ? 'Atualizar Ninja' : 'Cadastrar Ninja'}
                    </button>
                    {idEditandoNinja && (
                        <button type="button" onClick={limparFormularioNinja} style={{ flex: 1, backgroundColor: '#f44336', color: 'white', padding: '10px', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}