import { Modal, Button } from "react-bootstrap";
import style from "./ConfirmationModal.module.css";

const ConfirmationModal = ({ show, title, message, onConfirm, onCancel }) => {
  return (
    <Modal
      show={show}
      onHide={onCancel}
      className={style.modal}
      style={{ position: "fixed", top: "30%" }}
    >
      <Modal.Header closeButton className={style.header}>
        <Modal.Title className={style.title}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={style.text}>{message}</Modal.Body>
      <Modal.Footer className={style.footer}>
        <Button variant="success" onClick={onConfirm}>
          Confirmar
        </Button>
        <Button variant="danger" onClick={onCancel}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;