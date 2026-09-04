import React from 'react';
import './NinjaModal.css';

export default function NinjaModal({ ninja, onClose }) {
    if (!ninja) return null; // Se nenhum ninja foi selecionado, não exibe nada

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>X</button>

                <div className="modal-header">
                    <img src={ninja.imgUrl || '/default-avatar.png'} alt={ninja.nome} />
                    <div>
                        <h2>{ninja.nome}</h2>
                        <span className="modal-rank-badge">{ninja.rank}</span>
                    </div>
                </div>

                <div className="modal-body">
                    <p><strong>E-mail:</strong> {ninja.email}</p>
                    <p><strong>Idade:</strong> {ninja.idade} anos</p>

                    {/* Espaço para futuras missões, caso queira mostrar depois */}
                    <div className="modal-descricao-rank">
                        <h4>Sobre o Rank ({ninja.rank}):</h4>
                        <p>
                            {/* Aqui você pode exibir a descrição conceitual de acordo com o rank */}
                            Registro oficial da hierarquia shinobi de Konoha.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}