import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import style from "./Unauthorized.module.css";

const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className={style.container}>
      <h1 className={style.title}>Lo siento, no puedo dejarte entrar aqui</h1>

      <Button className={style.button} onClick={goBack}>
        Volver
      </Button>
    </div>
  );
};
export default Unauthorized;
