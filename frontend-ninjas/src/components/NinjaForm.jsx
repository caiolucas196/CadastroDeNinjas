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
        <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #33333d', borderRadius: '8px', backgroundColor: '#161619' }}>
            <h2>{idEditandoNinja ? '⚠️ Editar Ninja' : '📜 Cadastrar Novo Ninja'}</h2>
            <form onSubmit={salvarNinja} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px' }}>
                <input type="text" placeholder="Nome do Ninja" value={nome} onChange={(e) => setNome(e.target.value)} required />
                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="number" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} required />
                <input type="text" placeholder="Rank (ex: Genin, Jounin, Hokage)" value={rank} onChange={(e) => setRank(e.target.value)} required />
                <input type="url" placeholder="URL da Foto (Avatar)" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />

                <select value={missaoId} onChange={(e) => setMissaoId(e.target.value)}>
                    <option value="">Selecione uma Missão (Opcional)</option>
                    {missoes.map((m) => (
                        <option key={m.id} value={m.id}>
                            {m.nome} (Rank: {m.rank})
                        </option>
                    ))}
                </select>

                <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                    <button type="submit" style={{ flex: 1, backgroundColor: '#ff7700', color: '#fff', padding: '12px' }}>
                        {idEditandoNinja ? 'Atualizar Ninja' : 'Registrar na Vila'}
                    </button>
                    {idEditandoNinja && (
                        <button type="button" onClick={limparFormularioNinja} style={{ flex: 1, backgroundColor: '#3f3f46', color: '#fff', padding: '12px' }}>
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}