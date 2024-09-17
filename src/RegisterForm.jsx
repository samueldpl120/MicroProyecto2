import { useState, useEffect } from "react";
import { auth, db } from "./firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "../src/styles/RegisterForm.css"

function RegisterForm() {
  const [juegoElegido, setjuegoElegido] = useState("");
  const [juegos, setjuegos] = useState([]);
  const [name, setname] = useState("");
  const [apellido, setapellido] = useState("");
  const [username, setUserName] = useState("");
  const [correo, setcorreo] = useState("");
  const [clave, setclave] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const obtenerjuegos = async () => {
      const querySnapshot = await getDocs(collection(db, "juegos"));
      setjuegos(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    obtenerjuegos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        correo,
        clave
      );
      
      await addDoc(collection(db, "user"), {
        uid: userCredential.user.uid,
        name: name,
        apellido: apellido,
        username: username,
        videoJuegoFav: juegoElegido,
        correo: correo,
      });
      navigate("/landing");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2 className="title">Registrarse</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        name="apellido"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setapellido(e.target.value)}
      />
      <input
        type="text"
        name="username"
        placeholder="User Name"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="correo"
        name="correo"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setcorreo(e.target.value)}
      />
      <input
        type="clave"
        name="clave"
        placeholder="Contraseña"
        value={clave}
        onChange={(e) => setclave(e.target.value)}
      />
      <select
        name="videojuego"
        value={juegoElegido}
        onChange={(e) => setjuegoElegido(e.target.value)}
      >
        <option value="">Selecciona un juego</option>
        {juegos.map((videojuego) => (
          <option key={videojuego.id} value={videojuego.titulo}>
            {videojuego.titulo}
          </option>
        ))}
      </select>

      <button type="submit">Registrar</button>
    </form>
  );
}

export default RegisterForm;