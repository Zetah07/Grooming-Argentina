import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import style from "./Unauthorized.module.css";

const Unauthorized = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <div>
      <h1 className={style.title}>Contenido no autorizado</h1>
      <p className={style.text}>No tienes acceso a la pagina solicitada</p>
      <Button type="button" variant="primary" onClick={goBack}>Volver</Button>
    </div>
  )
}
export default Unauthorized