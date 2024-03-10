import { Link } from 'react-router-dom';
  import { FaHome } from 'react-icons/fa';
  import './ClubPage.css';
  import Club from "../components/ClubCard";
  
  
  function ClubPage() {
    
    const clubs = [
        {
          ID: 1,
          nombre: "Club de Aventureros",
          descripcion: "Explora lugares misteriosos y descubre tesoros ocultos con otros entusiastas de la aventura.",
          videojuegos: [1, 3, 11]
        },
        {
          ID: 2,
          nombre: "Club de Estrategia",
          descripcion: "Reúnete con estrategas brillantes para debatir tácticas, resolver enigmas y conquistar mundos virtuales.",
          videojuegos: [4, 15, 16]
        },
        {
          ID: 3,
          nombre: "Club de Constructores",
          descripcion: "Comparte tus creaciones en Minecraft, diseña estructuras asombrosas y colabora en proyectos épicos.",
          videojuegos: [7, 8, 14]
        },
        {
          ID: 4,
          nombre: "Club de Fútbol Virtual",
          descripcion: "Forma parte de un equipo virtual, compite en torneos y demuestra tus habilidades en FIFA 22.",
          videojuegos: [9, 10, 18]
        },
        {
          ID: 5,
          nombre: "Club de Cazadores de Zombis",
          descripcion: "Únete a otros supervivientes en la lucha contra hordas de no muertos en juegos como Left 4 Dead o Resident Evil.",
          videojuegos: [2, 13, 17]
        }
      ]
     ;
    return (
      <>
        <div className="club-page">
          <div className="encabezado">
            <div className="home-link">
              <Link to="/">
                <FaHome style={{ fontSize: '3rem' }} />
              </Link>
            </div>
            <h1>CLUBES</h1>
          </div>
          <div className="club-list">
            {clubs.map((club) => (
              <Club key={club.ID} club={club} />
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default ClubPage;