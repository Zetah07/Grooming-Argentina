// import React, { useEffect } from "react";
// import useAuth from "../../../hooks/useAuth.js";
import style from "./Bienvenidos.module.css";
// import axios from "axios";

const Bienvenidos = () => {
  // const { user, auth } = useAuth();

  // useEffect(() => {
  //   try{
  //     axios.get("http://localhost:4000/panel/bienvenidos", {
  //       withCredentials: true,
  //       headers: {
  //         Authorization: `Bearer ${auth?.accessToken}`,
  //       },
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [auth]);

  return (
    <div className={style.container}>
        <div>
          <h1>Bienvenido patoamigos</h1>
          <h2>Estas en la pagina de Bienvenidos</h2>
        </div>
    </div>
  );
};

export default Bienvenidos;
