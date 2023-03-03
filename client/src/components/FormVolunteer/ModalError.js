import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const ModalError = ({ error, show, handleClose }) => {
    return (
        <div>
            {
                error.length ?
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton className='bg-danger '>
                            <Modal.Title className='text-white'>Error en el llenado</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='fs-5'>
                            {error}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>
                                Cerrar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    :
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title className='bg-primary text-white'>Envío Exitoso!!!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Gracias por tu interés en ser parte de Grooming Argentina!!!
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>
                        </Modal.Footer>
                    </Modal>
            }
        </div >
    );
};

export default ModalError;


    //error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message

// const [error, setError] = useState(null);
// const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

// if (
//     error.response &&
//     error.response.data &&
//     error.response.data.message
// ) {
//     setError(error.response.data.message);
// } else {
//     setError(error.message);
// }
// handleShow();
// <ModalError show={show} handleClose={handleClose} error={error} />

//import ModalError from './ModalError.js';
//import { useState } from 'react';
