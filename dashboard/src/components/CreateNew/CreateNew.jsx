import axios from "../../api/axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import s from "./CreateNew.module.css";
import useAuth from "../../hooks/useAuth";
import showAlert from "../ShowAlert/ShowAlert";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/Actions";

const CreateNew = () => {
  const { auth } = useAuth();
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [formNew, setFormNew] = useState({
    title: "",
    img: "",
    description: "",
    link: "",
    category: [],
    provinceOrLocation: "",
  });

  console.log(formNew);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormNew({ ...formNew, [name]: value });
  };

  function selectHandler(event) {
    setFormNew({
      ...formNew,
      category: [...formNew.category, event.target.value],
    });
  }

  function deleteHandler(el) {
    setFormNew({
      ...formNew,
      category: formNew.category.filter((cat) => cat !== el),
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    try {
      await axios.post("/news", formNew, {
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
        category: [],
        provinceOrLocation: "",
      });
      setValidated(false);
    } catch (error) {
      console.log(error);
      showAlert("No se pudo crear la noticia, intente de nuevo.", "red");
    }
  };

  return (
    <>
      <br />
      <h1 className={s.title}>Crear Noticia</h1>
      <br />
      <div className="container">
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
            <Form.Group as={Col} md="4" controlId="formFile">
              <Form.Label>Imagen en formato JPG, JPEG o PNG</Form.Label>
              <Form.Control
                type="file"
                value={formNew.img}
                name="img"
                onChange={changeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Por favor subir un archivo en JPG, JPEG o PNG
              </Form.Control.Feedback>
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
              <Form.Select required name="category" onChange={selectHandler}>
                <option disabled defaultValue selected>
                  Seleccione al menos una categoria
                </option>
                {categories
                  ? categories.map((cat) => {
                      return (
                        <option key={cat._id} value={cat.name}>
                          {cat.name}
                        </option>
                      );
                    })
                  : null}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Por favor ingrese al menos una categoria.
              </Form.Control.Feedback>
              <p>Categorias seleccionadas: </p>
              <div>
                {formNew.category.map((el) => (
                  <>
                    <span key={el} className="card-subtitle mb-2 text-muted">
                      {el}{" "}
                    </span>
                    <Button onClick={() => deleteHandler(el)}>x</Button>
                  </>
                ))}
              </div>
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
          <Button
            type="submit"
            className={s.button}
            style={{ backgroundColor: "#004b82" }}
          >
            Crear
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateNew;
