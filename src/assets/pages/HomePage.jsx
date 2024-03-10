import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {

  
  return (
    <div className="home-page">
      <header id='header'>
        <h1 className="titulo">¡BIENVENIDO A NUESTRA PÁGINA WEB! AQUÍ ENCONTRARAS LOS MEJORES CLUBES CON LOS MEJORES VIDEOJUEGOS</h1>
        <div className="button-container">
          <Link to="/clubs" className="button">
            VER TODOS LOS CLUBES
          </Link>
        </div>
      </header>
      <main>
      </main>
      <footer>
        <p>ELABORADO POR: JUAN CEBALLOS Y SAMUEL PRIETO. 2024</p>
      </footer>
    </div>
  );
};

export default HomePage;