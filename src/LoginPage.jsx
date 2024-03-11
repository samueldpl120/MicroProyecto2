import { useState } from "react";
import { auth } from "../src/firebase-config";
import {
  signInWithEmailAndPassword as authenticateUser,
  signInWithPopup as authenticateWithPopup,
  GoogleAuthProvider as GoogleAuth,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "../src/styles/LoginPage.css"

function UserLogin() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const redirect = useNavigate();

  const loginWithGoogle = async (event) => {
    event.preventDefault();
    try {
      const googleProvider = new GoogleAuth();
      await authenticateWithPopup(auth, googleProvider);
      redirect("/landing");
    } catch (error) {
      setLoginError(error.message);
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setUserEmail(value);
    if (name === "password") setUserPassword(value);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await authenticateUser(auth, userEmail, userPassword);
      redirect("/landing");
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <form className="user-login-form" onSubmit={onFormSubmit}>
      <h2 className="login-title">Inicio de Sesión</h2>
      <p>
        No tienes cuenta? <Link to="/signup">Regístrate</Link>
      </p>
      <div className="form-input-group">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={userEmail}
          onChange={onInputChange}
        />
      </div>
      <div className="form-input-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={userPassword}
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="action-btn">
        Iniciar Sesión
      </button>
      <button type="button" className="google-signin-btn" onClick={loginWithGoogle}>
        Iniciar sesión con Google
      </button>
      {loginError && <p className="login-error-msg">{loginError}</p>}
    </form>
  );
}

export default UserLogin;