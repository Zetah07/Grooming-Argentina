import React, { useEffect } from "react";
import useAuth from "../../../hooks/useAuth.js";
import style from "./Bienvenidos.module.css";
import axios from "axios";

const Bienvenidos = () => {
  const { user, auth } = useAuth();

  useEffect(() => {
    try{
      axios.get("http://localhost:4000/panel/bienvenidos", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }, [auth]);

  const goToLogin = () => {
    window.location.href = "http://localhost:4000/";
  };

  

  return (
    <div className={style.container}>
      {user ? (
        <div>
          <h1>Bienvenido {user.name}</h1>
          <h2>Estas en la pagina de Bienvenidos</h2>
        </div>
      ) : (
        <div className="containerAlter">
          <button className={style.button} onClick={goToLogin}>
            <h2>
              Lo siento, <br />
              no puedo dejarte entrar aqui 🙄
            </h2>
          </button>
        </div>
      )}
    </div>
  );
};

export default Bienvenidos;
