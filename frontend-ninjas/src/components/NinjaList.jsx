export function NinjaList({ ninjas, idDetalheAberto, toggleDetalhesNinja, prepararEdicaoNinja, deletarNinja }) {
    return (
        <div>
            <h2>Lista de Ninjas</h2>
            {ninjas.length === 0 ? (
                <p>Nenhum ninja cadastrado.</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {ninjas.map((ninja) => (
                        <li key={ninja.id} style={{ border: '1px solid #eee', margin: '10px 0', padding: '10px', borderRadius: '6px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div><strong>{ninja.nome}</strong> | Idade: {ninja.idade} | Rank: {ninja.rank}</div>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button onClick={() => toggleDetalhesNinja(ninja.id)} style={{ cursor: 'pointer', padding: '5px 10px' }}>
                                        {idDetalheAberto === ninja.id ? '🔼 Ocultar' : '🔍 Detalhes'}
                                    </button>
                                    <button onClick={() => prepararEdicaoNinja(ninja)} style={{ cursor: 'pointer', padding: '5px 10px' }}>✏️ Editar</button>
                                    <button onClick={() => deletarNinja(ninja.id)} style={{ cursor: 'pointer', padding: '5px 10px', color: 'red' }}>🗑️ Deletar</button>
                                </div>
                            </div>

                            {idDetalheAberto === ninja.id && (
                                <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f2f2f2', borderTop: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '4px' }}>
                                    <div>
                                        <p><strong>Email:</strong> {ninja.email}</p>
                                        <p><strong>ID:</strong> {ninja.id}</p>
                                        <p><strong>Missão Atual:</strong> {ninja.missoes ? ninja.missoes.nome : 'Nenhuma missão atribuída'}</p>
                                    </div>
                                    <div>
                                        {ninja.imgUrl ? (
                                            <img src={ninja.imgUrl} alt="Foto" style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #ccc' }} />
                                        ) : (
                                            <p style={{ fontStyle: 'italic', color: '#666' }}>Sem foto</p>
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