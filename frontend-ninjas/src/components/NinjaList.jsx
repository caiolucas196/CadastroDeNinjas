import React, { useState } from 'react';
import NinjaCard from './NinjaCard';
import NinjaModal from './NinjaModal';

export function NinjaList({ ninjas, prepararEdicaoNinja, deletarNinja }) {
    const [ninjaSelecionado, setNinjaSelecionado] = useState(null);

    return (
        <div>
            <h2>⚔️ Registro de Ninjas</h2>

            {ninjas.length === 0 ? (
                <p style={{ color: '#a1a1aa', fontStyle: 'italic' }}>Nenhum ninja registrado na folha.</p>
            ) : (
                /* Grid de Cards com Temática Visual */
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
                    {ninjas.map((ninja) => (
                        <div
                            key={ninja.id}
                            onClick={() => setNinjaSelecionado(ninja)}
                            style={{ cursor: 'pointer', position: 'relative' }}
                        >
                            <NinjaCard ninja={ninja} />

                            {/* Botões de Ação rápidos (Editar/Deletar) flutuando no card */}
                            <div style={{ display: 'flex', gap: '6px', marginTop: '10px', justifyContent: 'center' }} onClick={(e) => e.stopPropagation()}>
                                <button
                                    onClick={() => prepararEdicaoNinja(ninja)}
                                    style={{ backgroundColor: '#3f3f46', color: '#f1f1f1', padding: '4px 10px', fontSize: '0.8rem', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                                >
                                    ✏️ Editar
                                </button>
                                <button
                                    onClick={() => deletarNinja(ninja.id)}
                                    style={{ backgroundColor: '#7f1d1d', color: '#f1f1f1', padding: '4px 10px', fontSize: '0.8rem', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                                >
                                    🗑️ Excluir
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal de Detalhes do Ninja ao clicar no card */}
            <NinjaModal
                ninja={ninjaSelecionado}
                onClose={() => setNinjaSelecionado(null)}
            />
        </div>
    );
}