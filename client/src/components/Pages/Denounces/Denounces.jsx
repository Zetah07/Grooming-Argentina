import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Button,
} from 'react-bootstrap';
import logoGrooming from '../../../assets/Logo_horizontal.png';
import logoInhope from '../../../assets/INHOPE.jpeg';
import style from './Denounces.module.css';
import showAlert from '../../ShowAlert/ShowAlert';

const Denounces = () => {
  const [validated, setValidated] = useState(false);
  const [denounceForm, setDenounceForm] = useState({
    situation: '',
    where: '',
    link: '',
    description: '',
    name: '',
    email: '',
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setDenounceForm({ ...denounceForm, [name]: value });
  };

  const handleSituationSelect = (eventKey) => {
    setDenounceForm({ ...denounceForm, situation: eventKey });
  };

  const handleWhereSelect = (eventKey) => {
    setDenounceForm({ ...denounceForm, where: eventKey });
  };

  const handleBlur = (event) => {
    const form = event.currentTarget.form;
    const input = event.currentTarget;

    if (input.validity.valid) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
    } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
    }

    if (form.checkValidity()) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3500/denounces',
        denounceForm
      );
      if (response.status === 201) {
        showAlert('Denuncia enviada con éxito', 'green');
        form.reset();
        setDenounceForm({
          situation: '',
          where: '',
          link: '',
          description: '',
          name: '',
          email: '',
        });
        setValidated(false);
      }
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
  };

  return (
    <div className={style.container}>
      <Container>
        <div className={style.logos}>
          <a
            href='https://www.inhope.org/EN'
            className={style.logoIhope}
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={logoInhope}
              alt='Logo inHope'
              className={style.logoIhope}
            />
          </a>
          <br />
          <img
            src={logoGrooming}
            alt='Logo grooming Argentina'
            className={style.logoGrooming}
          />
        </div>
      </Container>

      <Container>
        <Row>
          <Col>
            <div className={style.text}>
              <p>
                Primera línea de reportes contra el CSAM (mal llamada
                "pornografía infantil") en Argentina. Si tu denuncia se refiere
                a algo diferente de websites de acceso público, lamentablemente
                no podemos tomar medidas y puede ser un asunto para la policía.
                Si tu denuncia se refiere a cualquiera de los motivos
                especificados a continuación, debes contactar a tu policía local
                u Organización de protección de infancias y adolescencias:
              </p>
            </div>
            <div className={style.list}>
              <ul>
                <li>
                  Sospechas que una niña, niño y/o adolescente es víctima de
                  abuso y/o explotación sexual.
                </li>
                <li>
                  Imágenes almacenadas en dispositivos privados, tales como
                  teléfonos móviles, tabletas u ordenadores.
                </li>
                <li>
                  Conversaciones de solo texto en chats que no incluyen
                  imágenes.
                </li>
                <li>
                  Programas de envío de documentos entre pares (Peer-To-Peer) o
                  servicios torrent.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <Form
        className='container'
        style={{ width: '63%', textAlign: 'left' }}
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <Form.Group controlId='situation'>
          <Form.Label className={style.label}>
            ¿QUE SITUACIÓN QUERES DENUNCIAR?
          </Form.Label>
          <div style={{ maxWidth: '220px' }}>
            <DropdownButton
              title={denounceForm.situation || 'Seleccionar'}
              onSelect={handleSituationSelect}
              className={`${style.dropdown} btn-block text-wrap`}
            >
              <Dropdown.Item
                eventKey='Imágenes o videos de abuso y/o explotación sexual infantil en internet'
                className={`${style.dropdown} text-wrap`}
              >
                Imágenes o videos de abuso y/o explotación sexual infantil en
                internet
              </Dropdown.Item>
              <hr />
              <Dropdown.Item eventKey='Grooming / Acoso en linea'>
                Grooming / Acoso en linea
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </Form.Group>

        <Form.Group controlId='where'>
          <Form.Label className={style.label}>
            ¿DÓNDE VISTE EL CONTENIDO?
          </Form.Label>
          <DropdownButton
            title={denounceForm.where || 'Seleccionar'}
            onSelect={handleWhereSelect}
          >
            <Dropdown.Item eventKey='Juegos en Linea'>
              Juegos en Linea
            </Dropdown.Item>
            <Dropdown.Item eventKey='Correo electrónico (links a contenido)'>
              Correo electrónico (links a contenido)
            </Dropdown.Item>
            <Dropdown.Item eventKey='Redes Sociales'>
              Redes Sociales
            </Dropdown.Item>
            <Dropdown.Item eventKey='Foros o grupos en linea'>
              Foros o grupos en linea
            </Dropdown.Item>
            <Dropdown.Item eventKey='Otro'>Otro</Dropdown.Item>
          </DropdownButton>
        </Form.Group>

        <Form.Group controlId='link'>
          <Form.Label className={style.label}>
            Detalles del sitio web:
          </Form.Label>
          <Form.Control
            name='link'
            required
            type='text'
            placeholder='Ingrese detalles del sitio web aquí'
            value={denounceForm.link}
            onChange={inputHandler}
            onBlur={handleBlur}
          />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='description'>
          <Form.Label className={style.label}>Descripción:</Form.Label>
          <Form.Control
            name='description'
            required
            as='textarea'
            rows={3}
            placeholder='Ingrese una descripción detallada aquí (hasta 500 caracteres)'
            maxLength={500}
            value={denounceForm.description}
            onChange={inputHandler}
            onBlur={handleBlur}
          />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
        </Form.Group>
        <br />
        <Container className={style.nameEmail}>
          <h2>Datos de contacto:</h2>
          <span className={style.contactInfo}>
            Si desea una respuesta, por favor, complete los siguientes campos:
          </span>
          <Form.Group controlId='name'>
            <Form.Label className={style.label}>Nombre completo:</Form.Label>
            <Form.Control
              name='name'
              required
              type='text'
              placeholder='Ingrese su nombre aquí'
              value={denounceForm.name}
              onChange={inputHandler}
              onBlur={handleBlur}
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label className={style.label}>Email:</Form.Label>
            <Form.Control
              name='email'
              required
              type='email'
              placeholder='Ingrese su email aquí'
              value={denounceForm.email}
              onChange={inputHandler}
              onBlur={handleBlur}
            />

            <Form.Control.Feedback type='invalid'>
              Por favor ingrese un email válido.
            </Form.Control.Feedback>
          </Form.Group>
          <br />
        </Container>
        <br />
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check
            required
            type='checkbox'
            label='Acepto que los datos proporcionados sean utilizada para el envío de información sobre la campaña de denuncias de grooming y abuso sexual infantil.'
          />
          <a
            href='https://inhope.org/media/site/1fffcc1905-1614610382/inhope_codeofpractice.pdf?utm_source=Members&utm_medium=link&utm_campaign=INHOPE%20COP'
            className={style.link}
            target='_blank'
            rel='noreferrer'
          >
            Código de prácticas de INHOPE
          </a>
        </Form.Group>
        <br />
        <Button variant='primary' type='submit' className={style.button}>
          Enviar
        </Button>
        <br />
      </Form>
    </div>
  );
};

export default Denounces;
