import { useNavigate } from "react-router-dom";

const Unauthorized = () =>{
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    return (
        <div>
            <h1>Unauthorized</h1>
            <br/>
            <p>NO tienes acceso a la pagina solicitada</p>
            <button type="button" onClick={goBack}>Volver</button>
        </div>
    )
}
export default Unauthorized