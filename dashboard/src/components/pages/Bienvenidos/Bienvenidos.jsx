import style from "./Bienvenido.module.css";
import React from "react";

const Bienvenidos = () => {
    return (
      <div className={style.container} >
        <h1 className={style.title}>Bienvenido</h1>
        <h2 className={style.h2}>Usuario: pato batman programador</h2>
        <p className={style.p}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum 
          is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>
    )
  }
  export default Bienvenidos