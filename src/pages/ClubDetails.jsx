import { useLocation, useParams } from 'react-router-dom';
import "./ClubDetails.css"

function ClubDetail() {
  const { ID } = useParams();
  const location = useLocation();
  const { clubs } = location.state;

  const club = club.find((club) => club.id === parseInt(ID));

  if (!club) {
    return <p>NO SE ENCONTRÓ NINGÚN CLUB</p>;
  }

  return (
    <div>
      <div id='titulo'>DETALLES DEL CLUB SELECCIONADO</div>
      <div className='details'>
      <img className="image" src={club.imageUrl} alt={club.nombre} />
      <div id='info'>
            <p>ID: {club.ID}</p>
            <p>NOMBRE: {club.nombre}</p>
            <p>DESCRIPCIÓN: {club.descripcion}</p>
            <p>VIDEOJUEGOS DISPONIBLES: {club.videojuegos}</p>
        </div>
      </div>
    </div>
  );
}

export default ClubDetail;