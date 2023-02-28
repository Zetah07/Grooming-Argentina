import style from "./Bienvenido.module.css";
import React from "react";

const Bienvenidos = () => {
    return (
      <div className={style.container} >
        <h1 className={style.title}>Bienvenido</h1>
        <p className={style.text}>Usuario: "user"</p>
      </div>
    )
  }
  export default Bienvenidos