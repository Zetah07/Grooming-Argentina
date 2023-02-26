import style from "./Bienvenido.module.css";
const Bienvenidos = () => {
    return (
      <div>
        <h1 className={style.title}>Bienvenido</h1>
        <p className={style.text}>Usuario: "user"</p>
      </div>
    )
  }
  export default Bienvenidos