import PropTypes from 'prop-types';
import './GameCard.css';
import { useNavigate } from 'react-router-dom';

function GameCard({ game }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/game/${game.ID}`, { state: { games: [game] } });
  };

  return (
    <div className="game-card" onClick={handleClick}>
      <img className="game-image" src={game.imageUrl} alt={game.titulo} />
      <div className="game-details">
        <h2 className="game-titulo">{game.titulo}</h2>
        <p className="game-genero">${game.genero}</p>
        <p className="game-descripcion">${game.descripcion}</p>
      </div>
    </div>
  );
}

GameCard.propTypes = {
  game: PropTypes.shape({
    ID: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    genero: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameCard;