import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getNewByID, resetFilter } from "../../../Redux/Actions/index";
import { useParams } from "react-router-dom";
import axios from "../../../api/axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Form, Container } from "react-bootstrap/";
import Row from "react-bootstrap/Row";
import useAuth from "../../../hooks/useAuth";
import InputGroup from "react-bootstrap/InputGroup";
import style from "./ManageNewsById.module.css";
import showAlert from "../../ShowAlert/ShowAlert";

const ManageBlogsById = () => {
  const dispatch = useDispatch();
  const newId = useSelector((state) => state.newID);
  const filter = useSelector((state) => state.filter);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getNewByID(id));
  }, [dispatch, id]);

  const [formNew, setFormNew] = useState({
    id: "",
    title: "",
    img: "",
    description: "",
    link: "",
    category: "",
    provinceOrLocation: "",
  });

  useEffect(() => {
    if (filter === true) {
      setFormNew({
        id: newId._id,
        title: newId.title,
        img: newId.img,
        description: newId.description,
        link: newId.link,
        category: newId.category,
        provinceOrLocation: newId.provinceOrLocation,
      });
      dispatch(resetFilter());
    }
  }, [
    dispatch,
    filter,
    newId.title,
    newId.img,
    newId.description,
    newId.link,
    newId.category,
    newId.provinceOrLocation,
  ]);

  const [validated, setValidated] = useState(false);
  const { auth } = useAuth();

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
      await axios.put(`/news/${id}`, formNew, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      });

      showAlert("Noticia modificada correctamente.", "green");
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
      showAlert("No se pudo modificar la noticia, intente de nuevo.", "red");
    }
  };

  return (
    <>
      <Container className={style.container}>
        <div>
          <h3>Modificar Notica</h3>
        </div>
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
              <Form.Label>Descripción de la noticia:</Form.Label>
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
            />
          </Form.Group>
          <Button type="submit">Modificar</Button>
        </Form>
      </Container>
    </>
  );
};
export default ManageBlogsById;
