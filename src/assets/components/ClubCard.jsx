import PropTypes from 'prop-types';
import './ClubCard.css';
import { useNavigate } from 'react-router-dom';

function ClubCard({ club }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/club/${club.ID}`, { state: { clubs: [club] } });
  };

  return (
    <div className="club-card" onClick={handleClick}>
      <img className="club-image" src={club.imageUrl} alt={club.nombre} />
      <div className="club-details">
        <h2 className="club-nombre">{club.nombre}</h2>
        <p className="club-descripcion">${club.descripcion}</p>
        <p className="club-videojuegos">${club.videojuegos}</p>
      </div>
    </div>
  );
}

ClubCard.propTypes = {
  club: PropTypes.shape({
    ID: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    videojuegos: PropTypes.array.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClubCard;