import React from 'react';
import './NinjaCard.css'; // Importa o estilo específico do card

// Função auxiliar pura para definir as classes e rótulos baseados no Rank
const getRankTheme = (rank) => {
    switch (rank) {
        case 'KAGE':
            return { borderClass: 'border-kage', badgeClass: 'badge-kage', label: 'Kage' };
        case 'ANBU':
            return { borderClass: 'border-anbu', badgeClass: 'badge-anbu', label: 'ANBU' };
        case 'JOUNIN':
        case 'JOUNIN_ESPECIAL':
            return { borderClass: 'border-jounin', badgeClass: 'badge-jounin', label: 'Jounin' };
        case 'CHUUNIN':
            return { borderClass: 'border-chuunin', badgeClass: 'badge-chuunin', label: 'Chuunin' };
        case 'NUKENIN':
            return { borderClass: 'border-nukenin', badgeClass: 'badge-nukenin', label: 'Nukenin' };
        case 'LENDARIO':
            return { borderClass: 'border-lendario', badgeClass: 'badge-lendario', label: 'Lendário' };
        default:
            return { borderClass: 'border-genin', badgeClass: 'badge-genin', label: rank || 'Genin' };
    }
};

export default function NinjaCard({ ninja }) {
    const theme = getRankTheme(ninja.rank);

    return (
        <div className={`card-ninja ${theme.borderClass}`}>
            {/* Badge de Rank flutuante */}
            <span className={`badge-rank ${theme.badgeClass}`}>
        {theme.label}
      </span>

            <div className="card-avatar">
                <img src={ninja.imgUrl || '/default-avatar.png'} alt={ninja.nome} />
            </div>

            <div className="card-info">
                <h3>{ninja.nome}</h3>
                <p className="email-info">{ninja.email}</p>
                <p className="idade-info">Idade: {ninja.idade} anos</p>
            </div>
        </div>
    );
}