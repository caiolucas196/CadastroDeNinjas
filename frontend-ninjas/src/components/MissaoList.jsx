export function MissaoList({ missoes, idDetalheMissaoAberto, toggleDetalhesMissao, prepararEdicaoMissao, deletarMissao }) {
    return (
        <div>
            <h2>📋 Mural de Missões</h2>
            {missoes.length === 0 ? (
                <p style={{ color: '#a1a1aa', fontStyle: 'italic' }}>Nenhuma missão disponível no mural.</p>
            ) : (
                <ul>
                    {missoes.map((missao) => (
                        <li key={missao.id}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <strong style={{ color: '#60a5fa', fontSize: '1.1rem' }}>{missao.nome}</strong>
                                    <span style={{ color: '#a1a1aa' }}> | Rank: <span style={{ color: '#ffd700' }}>{missao.rank}</span></span>
                                </div>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button onClick={() => toggleDetalhesMissao(missao.id)} style={{ backgroundColor: '#27272a', color: '#f1f1f1', padding: '6px 12px' }}>
                                        {idDetalheMissaoAberto === missao.id ? '🔼 Ocultar' : '🔍 Detalhes'}
                                    </button>
                                    <button onClick={() => prepararEdicaoMissao(missao)} style={{ backgroundColor: '#3f3f46', color: '#f1f1f1', padding: '6px 12px' }}>✏️</button>
                                    <button onClick={() => deletarMissao(missao.id)} style={{ backgroundColor: '#7f1d1d', color: '#f1f1f1', padding: '6px 12px' }}>🗑️</button>
                                </div>
                            </div>

                            {idDetalheMissaoAberto === missao.id && (
                                <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#0d0d0f', borderTop: '1px dashed #33333d', borderRadius: '6px' }}>
                                    <p><strong>ID da Missão:</strong> {missao.id}</p>
                                    <p><strong>Descrição/Nome:</strong> {missao.nome}</p>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}