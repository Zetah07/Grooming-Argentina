import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getBlogByID, resetFilter } from "../../../Redux/Actions/index";
import { useParams } from "react-router-dom";
import axios from "../../../api/axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Form, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import useAuth from "../../../hooks/useAuth";
import style from "./ManageBlogsById.module.css";
import showAlert from "../../ShowAlert/ShowAlert";

const ManageBlogsById = () => {
  const dispatch = useDispatch();
  const blogId = useSelector((state) => state.blogId);
  const filter = useSelector((state) => state.filter);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getBlogByID(id));
  }, [dispatch, id]);

  const [formBlog, setFormBlog] = useState({
    title: "",
    subtitle: "",
    content: "",
  });

  useEffect(() => {
    if (filter === true) {
      setFormBlog({
        title: blogId.title,
        subtitle: blogId.subtitle,
        content: blogId.content,
      });
      dispatch(resetFilter());
    }
  }, [dispatch, filter, blogId.title, blogId.subtitle, blogId.content]);

  const [validated, setValidated] = useState(false);
  const { auth } = useAuth();

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
      await axios.put(`http://localhost:3500/blog/${id}`, formBlog, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      });

      showAlert("Blog modificado correctamente.", "green");
      form.reset();
      setFormBlog({ title: "", subtitle: "", content: "" });
      setValidated(false);
    } catch (error) {
      showAlert("No se pudo modificar el blog, intente de nuevo", "red");
    }
  };

  return (
    <Container className={style.container}>
      <div>
        <h3>Modificar Blog</h3>
      </div>
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
          />
        </Form.Group>
        <Button type="submit">Modificar</Button>
      </Form>
    </Container>
  );
};
export default ManageBlogsById;
