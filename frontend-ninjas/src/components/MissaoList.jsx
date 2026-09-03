export function MissaoList({ missoes, idDetalheMissaoAberto, toggleDetalhesMissao, prepararEdicaoMissao, deletarMissao }) {
    return (
        <div>
            <h2>Lista de Missões</h2>
            {missoes.length === 0 ? (
                <p>Nenhuma missão cadastrada.</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {missoes.map((missao) => (
                        <li key={missao.id} style={{ border: '1px solid #eee', margin: '10px 0', padding: '10px', borderRadius: '6px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div><strong>{missao.nome}</strong> | Rank: {missao.rank}</div>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button onClick={() => toggleDetalhesMissao(missao.id)} style={{ cursor: 'pointer', padding: '5px 10px' }}>
                                        {idDetalheMissaoAberto === missao.id ? '🔼 Ocultar' : '🔍 Detalhes'}
                                    </button>
                                    <button onClick={() => prepararEdicaoMissao(missao)} style={{ cursor: 'pointer', padding: '5px 10px' }}>✏️ Editar</button>
                                    <button onClick={() => deletarMissao(missao.id)} style={{ cursor: 'pointer', padding: '5px 10px', color: 'red' }}>🗑️ Deletar</button>
                                </div>
                            </div>

                            {idDetalheMissaoAberto === missao.id && (
                                <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#e3f2fd', borderTop: '1px dashed #ccc', borderRadius: '4px' }}>
                                    <p><strong>ID da Missão:</strong> {missao.id}</p>
                                    <p><strong>Nome:</strong> {missao.nome}</p>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}