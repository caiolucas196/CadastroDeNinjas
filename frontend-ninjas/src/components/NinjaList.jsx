export function NinjaList({ ninjas, idDetalheAberto, toggleDetalhesNinja, prepararEdicaoNinja, deletarNinja }) {
    return (
        <div>
            <h2>⚔️ Registro de Ninjas</h2>
            {ninjas.length === 0 ? (
                <p style={{ color: '#a1a1aa', fontStyle: 'italic' }}>Nenhum ninja registrado na folha.</p>
            ) : (
                <ul>
                    {ninjas.map((ninja) => (
                        <li key={ninja.id}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <strong style={{ color: '#ffd700', fontSize: '1.1rem' }}>{ninja.nome}</strong>
                                    <span style={{ color: '#a1a1aa' }}> | Idade: {ninja.idade} | Rank: <span style={{ color: '#ff7700' }}>{ninja.rank}</span></span>
                                </div>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button onClick={() => toggleDetalhesNinja(ninja.id)} style={{ backgroundColor: '#27272a', color: '#f1f1f1', padding: '6px 12px' }}>
                                        {idDetalheAberto === ninja.id ? '🔼 Ocultar' : '🔍 Detalhes'}
                                    </button>
                                    <button onClick={() => prepararEdicaoNinja(ninja)} style={{ backgroundColor: '#3f3f46', color: '#f1f1f1', padding: '6px 12px' }}>✏️</button>
                                    <button onClick={() => deletarNinja(ninja.id)} style={{ backgroundColor: '#7f1d1d', color: '#f1f1f1', padding: '6px 12px' }}>🗑️</button>
                                </div>
                            </div>

                            {idDetalheAberto === ninja.id && (
                                <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#0d0d0f', borderTop: '1px dashed #33333d', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '6px' }}>
                                    <div>
                                        <p><strong>E-mail:</strong> {ninja.email}</p>
                                        <p><strong>ID do Shinobi:</strong> {ninja.id}</p>
                                        <p><strong>Missão Atribuída:</strong> <span style={{ color: '#ffd700' }}>{ninja.missoes ? ninja.missoes.nome : 'Nenhuma missão ativa'}</span></p>
                                    </div>
                                    <div>
                                        {ninja.imgUrl ? (
                                            <img src={ninja.imgUrl} alt="Foto" style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #ffd700' }} />
                                        ) : (
                                            <p style={{ fontStyle: 'italic', color: '#71717a', fontSize: '0.9rem' }}>Sem foto</p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}