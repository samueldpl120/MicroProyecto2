import { useLocation, useParams } from 'react-router-dom';
import "./GameDetails.css"

function GameDetail() {
  const { id } = useParams();
  const location = useLocation();
  const { games } = location.state;

  const game = game.find((game) => game.ID === parseInt(ID));

  if (!game) {
    return <p>NO SE ENCONTRÓ NINGÚN VIDEOJUEGO</p>;
  }

  return (
    <div>
      <div id='titulo'>DETALLES DEL VIDEOJUEGO SELECCIONADO</div>
      <div className='details'>
      <img className="image" src={game.imageUrl} alt={game.nombre} />
      <div id='info'>
            <p>ID: {game.ID}</p>
            <p>TÍTULO: {game.titulo}</p>
            <p>GÉNERO: {game.genero}</p>
            <p>DESCRIPCIÓN: {game.descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default GameDetail;