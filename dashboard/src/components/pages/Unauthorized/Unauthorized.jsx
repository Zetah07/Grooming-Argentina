import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import style from "./Unauthorized.module.css";

const Unauthorized = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <div>
        <div className="containerAlter">
          <button className={style.button} onClick={goBack}>
            <h2>
              Lo siento, <br />
              no puedo dejarte entrar aqui 🙄
            </h2>
          </button>
        </div>
    </div>
  )
}
export default Unauthorized