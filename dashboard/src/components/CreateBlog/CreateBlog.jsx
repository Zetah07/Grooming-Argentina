import axios from "../../api/axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import s from "./CreateBlog.module.css";
import useAuth from "../../hooks/useAuth";
import showAlert from "../ShowAlert/ShowAlert";

const CreateNew = () => {
  const { auth } = useAuth();
  const [validated, setValidated] = useState(false);

  const [formBlog, setFormBlog] = useState({
    title: "",
    subtitle: "",
    content: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormBlog({ ...formBlog, [name]: value });
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
      await axios.post("/blog", formBlog, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      });

      showAlert("post creado correctamente.", "green");
      form.reset();
      setFormBlog({ title: "", subtitle: "", content: "" });
      setValidated(false);
    } catch (error) {
      console.log(error);
      showAlert("No se pudo crear el post, intente de nuevo", "red");
    }
  };

  return (
    <>
      <div className={s.container1}>
        <span>Crear Blog</span>
      </div>
      <div className={s.formContainer}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Titulo:</Form.Label>
              <Form.Control
                required
                type="text"
                value={formBlog.title}
                name="title"
                onChange={changeHandler}
              />
              <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Subtitulo:</Form.Label>
              <Form.Control
                required
                type="text"
                value={formBlog.subtitle}
                name="subtitle"
                onChange={changeHandler}
              />
              <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="validationCustom05">
              <Form.Label>Contenido del Blog:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                value={formBlog.content}
                name="content"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese el contenido del blog.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              inline
              label="Acepta que la información se encuentra correcta."
              feedback="Por favor valide que la información se encuentre correcta."
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
