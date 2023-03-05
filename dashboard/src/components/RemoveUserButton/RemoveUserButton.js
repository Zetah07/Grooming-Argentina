import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import ConfirmationModal from "../pages/ConfirmationModal/ConfirmationModal";

const RemoveUserButton = (props) => {

  const [showModal, setShowModal] = useState(false);
  const { auth } = useAuth();

  const { document, succesFn, alert } = props

  const deleteUser = async () => {
    try {
      await axios.delete("/users", {
        data: { user: document },
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      });
      alert("El usuario se elimino con exito", "green")
      succesFn(true);
    } catch (error) {
      alert(`El usuario no se pudo eliminar, ${error}`, "red")
    }
    setShowModal(false)
  };



  return (
    <>
      <div onClick={() => setShowModal(true)}>
        <Button>Borrar usuario</Button>
      </div>
      {showModal && (
        <ConfirmationModal
          show={showModal}
          title="Eliminar usuario"
          message="¿Estás seguro que quieres eliminar este usuario?"
          onConfirm={deleteUser}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
};
export default RemoveUserButton;
