import axios from "../../api/axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import s from "./CreateNew.module.css";
import useAuth from "../../hooks/useAuth";

const CreateNew = () => {
  const { auth } = useAuth();
  const [validated, setValidated] = useState(false);

  const [formNew, setFormNew] = useState({
    title: "",
    img: "",
    description: "",
    link: "",
    category: "",
    provinceOrLocation: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormNew({ ...formNew, [name]: value });
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
      await axios.post("http://localhost:3500/news", formNew, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      });

      showAlert("Noticia creada correctamente.", "green");
      form.reset();
      setFormNew({
        title: "",
        img: "",
        description: "",
        link: "",
        category: "",
        provinceOrLocation: "",
      });
      setValidated(false);
    } catch (error) {
      console.log(error);
      showAlert("No se pudo crear la noticia, intente de nuevo.", "red");
    }
  };

  const showAlert = (message, color) => {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", "text-center");

    if (color === "green") {
      alertDiv.classList.add("alert-success");
    } else if (color === "red") {
      alertDiv.classList.add("alert-danger");
    }

    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.classList.add("hide");
      setTimeout(() => {
        document.body.removeChild(alertDiv);
      }, 600);
    }, 3000);
  };

  return (
    <>
      <div className={s.container1}>
        <span>Crear Noticia</span>
      </div>
      <div className={s.newsContainer}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Titulo:</Form.Label>
              <Form.Control
                required
                type="text"
                value={formNew.title}
                name="title"
                onChange={changeHandler}
              />
              <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Imagen URL:</Form.Label>
              <Form.Control
                required
                type="Url"
                placeholder="Ingresar el enlace de la Imagen"
                value={formNew.img}
                name="img"
                onChange={changeHandler}
              />
              <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Link adicional</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="Url"
                  placeholder="Ingrese el enlace externo de la noticia"
                  aria-describedby="inputGroupPrepend"
                  value={formNew.link}
                  name="link"
                  onChange={changeHandler}
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Provincia o Localización:</Form.Label>
              <Form.Control
                type="text"
                required
                value={formNew.provinceOrLocation}
                name="provinceOrLocation"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese la provincia o Localización de la noticia.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                required
                value={formNew.category}
                name="category"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese al menos una categoria.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom05">
              <Form.Label className={s.label}>
                Descripción de la noticia:
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                value={formNew.description}
                name="description"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese la descaripción de la noticia.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              inline
              label="Acepta que la información se encuentra correcta."
              feedback="Por favor valide que la información se encuentre correcta.."
              feedbackType="invalid"
              className={s.feedback}
            />
          </Form.Group>
          <Button type="submit" className={s.button}>
            Crear
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateNew;
