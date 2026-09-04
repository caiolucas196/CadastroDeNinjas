export function MissaoForm({
                                nome, setNome,           // Campo de texto livre para a descrição/nome da missão
                                rank, setRank,           // Select fixo para o rank oficial
                                idEditandoMissao,
                                salvarMissao,
                                limparFormularioMissao
                            }) {
    return (
        <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #33333d', borderRadius: '8px', backgroundColor: '#161619' }}>
            <h2>{idEditandoMissao ? '⚠️ Editar Missão' : '📜 Cadastrar Nova Missão'}</h2>

            <form onSubmit={salvarMissao} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px' }}>

                {/* 1. Campo livre para você descrever a missão (Ex: "Salvar gatinho") */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ color: '#f1f1f1', fontWeight: 'bold' }}>Descrição / Nome da Missão:</label>
                    <input
                        type="text"
                        placeholder="Ex: Salvar o gatinho da vizinha, Proteger o senhor Tazuna..."
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        style={{ padding: '10px', borderRadius: '6px', backgroundColor: '#181818', color: '#f1f1f1', border: '1px solid #333' }}
                    />
                </div>

                {/* 2. Select fixo para você classificar o nível real da missão */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label htmlFor="rankMissao" style={{ color: '#f1f1f1', fontWeight: 'bold' }}>Rank da Missão:</label>
                    <select
                        id="rankMissao"
                        value={rank}
                        onChange={(e) => setRank(e.target.value)}
                        required
                        style={{ padding: '10px', borderRadius: '6px', backgroundColor: '#181818', color: '#f1f1f1', border: '1px solid #333' }}
                    >
                        <option value="" disabled>Selecione o Rank Oficial...</option>
                        <option value="RANK_D">Rank D - Nível civil e tarefas domésticas</option>
                        <option value="RANK_C">Rank C - Baixo risco de confronto</option>
                        <option value="RANK_B">Rank B - Média dificuldade para shinobi</option>
                        <option value="RANK_A">Rank A - Alta periculosidade</option>
                        <option value="RANK_S">Rank S - Perigo máximo e elite</option>
                        <option value="Rank_SS">Rank SS - Nível Kage</option>
                        <option value="Rank_SSS">Rank SS+ - Mortalidade quase certa</option>
                    </select>
                </div>

                {/* Botões de Ação */}
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <button type="submit" style={{ backgroundColor: '#2563eb', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                        {idEditandoMissao ? 'Salvar Alterações' : 'Cadastrar Missão'}
                    </button>
                    {idEditandoMissao && (
                        <button type="button" onClick={limparFormularioMissao} style={{ backgroundColor: '#52525b', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}