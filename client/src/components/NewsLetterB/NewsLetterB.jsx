import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import style from './NewsLetterB.module.css';
import showAlert from '../ShowAlert/ShowAlert';

function NewsletterModalA() {
  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const charsArray =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += charsArray[Math.floor(Math.random() * charsArray.length)];
    }
    setCaptcha(captcha);
  };

  const handleClose = () => {
    setShow(false);
    setEmailError(false);
    setFullName('');
    setEmail('');
  };
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }
    if (captchaInput !== captcha) {
      setCaptchaInput('');
      return showAlert('código ingresado incorrecto', 'red');
    }
    try {
      const response = await axios.post('/newsLetter', {
        fullName,
        email,
      });
      if (response.status === 201) {
        showAlert('¡Te has suscrito con éxito!', 'green');
      }
      handleClose();
      setFullName('');
      setEmail('');
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        showAlert(error.response.data.message, 'red');
      } else {
        showAlert(error.message, 'red');
      }
    }
    setFullName('');
    setEmail('');
    setCaptchaInput('');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;
    return emailRegex.test(email);
  };

  return (
    <div className={style.container}>
      <a onClick={handleShow} href='#' className={style.link}>
        NewsLetter
      </a>

      <Modal show={show} onHide={handleClose} className={style.modal}>
        <Modal.Header closeButton className={style.modalHeader}>
          <Modal.Title className={style.modalTitle}>
            Suscríbete a nuestro NewsLetter
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} className={style.form}>
            <Form.Group controlId='formBasicName'>
              <Form.Label className={style.label}>Nombre:</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ingrese su nombre...'
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className={style.input}
              />
            </Form.Group>

            <Form.Group controlId='formBasicEmail'>
              <Form.Label className={style.label}>
                Correo electrónico:
              </Form.Label>
              <Form.Control
                type='email'
                placeholder='Escriba su email...'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={style.input}
                isInvalid={emailError}
              />
              {emailError && (
                <Form.Control.Feedback type='invalid'>
                  Correo electrónico inválido.
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId='formBasicCaptcha'>
              <Form.Label className={style.label}>Captcha:</Form.Label>
              <div className={style.captchaContainer}>
                <span className={style.captcha}>{captcha}</span>
                <Button
                  variant='outline-secondary'
                  onClick={generateCaptcha}
                  className={style.reloadButton}
                >
                  &#x21bb;
                </Button>
              </div>
              <Form.Control
                type='text'
                placeholder='Ingrese el código'
                value={captchaInput}
                onChange={(event) => setCaptchaInput(event.target.value)}
                className={style.input}
              />
            </Form.Group>

            <Button variant='primary' type='submit' className={style.button}>
              Suscribirse
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NewsletterModalA;
