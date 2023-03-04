import { Button } from "react-bootstrap";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const RemoveUserButton = (props) => {
    
  
  const { auth } = useAuth();
  const {document ,succesFn, alert} = props 
  const deleteUser = async () => {
    try {
    await axios.delete("/users", {
        data: { user: document},
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      });
      alert("El usuario se elimino con exito","green")
      succesFn(true);
    } catch (error) {
        alert(`El usuario no se pudo eliminar, ${error}`,"red")
    }
  };
  return <Button onClick={deleteUser}>Borrar usuario</Button>;
};
export default RemoveUserButton;
