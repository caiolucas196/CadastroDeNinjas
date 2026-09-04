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

                {/* O input antigo de rank foi removido daqui e substituído pelo select abaixo */}

                <input type="url" placeholder="URL da Foto (Avatar)" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />

                <select value={missaoId} onChange={(e) => setMissaoId(e.target.value)}>
                    <option value="">Selecione uma Missão (Opcional)</option>
                    {missoes.map((m) => (
                        <option key={m.id} value={m.id}>
                            {m.nome} (Rank: {m.rank})
                        </option>
                    ))}
                </select>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label htmlFor="rank" style={{ color: '#f1f1f1', fontWeight: 'bold' }}>Rank do Ninja:</label>
                    <select
                        id="rank"
                        name="rank"
                        value={rank}
                        onChange={(e) => setRank(e.target.value)}
                        required
                        style={{ padding: '10px', borderRadius: '6px', backgroundColor: '#181818', color: '#f1f1f1', border: '1px solid #333' }}
                    >
                        <option value="" disabled>Selecione o Rank...</option>
                        <option value="ESTUDANTE">Estudante</option>
                        <option value="GENIN">Genin</option>
                        <option value="CHUUNIN">Chuunin</option>
                        <option value="JOUNIN">Jounin</option>
                        <option value="JOUNIN_ESPECIAL">Jounin Especial</option>
                        <option value="ANBU">ANBU</option>
                        <option value="KAGE">Kage</option>
                        <option value="LENDARIO">Lendário</option>
                        <option value="NUKENIN">Nukenin (Renegado)</option>
                        <option value="CIVIL">Civil</option>
                    </select>
                </div>

                {/* Botões de Salvar/Cancelar */}
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <button type="submit" style={{ backgroundColor: '#2563eb', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                        {idEditandoNinja ? 'Salvar Alterações' : 'Cadastrar Ninja'}
                    </button>
                    {idEditandoNinja && (
                        <button type="button" onClick={limparFormularioNinja} style={{ backgroundColor: '#52525b', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}