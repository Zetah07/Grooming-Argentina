import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getNewByID, resetFilter, getCategories } from "../../../Redux/Actions/index";
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
  const categories = useSelector((state) => state.categories);
  const pronvinces = ["Buenos Aires", "Ciudad Autónoma de Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego, Antártida e Islas del Atlántico Sur", "Tucumán"]

  useEffect(() => {
    dispatch(getNewByID(id));
    dispatch(getCategories());
  }, [dispatch, id]);

  const [formNew, setFormNew] = useState({
    id: "",
    title: "",
    img: "",
    description: "",
    link: "",
    category: [],
    provinceOrLocation: "",
  });

  useEffect(() => {
    if (filter === true) {
      setFormNew({
        id: newId._id,
        title: newId.title,
        img: newId.img.url,
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
    newId._id,
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
        category: [],
        provinceOrLocation: "",
      });
      setValidated(false);
    } catch (error) {
      showAlert("No se pudo modificar la noticia, intente de nuevo.", "red");
    }
  };

  function selectHandler(event) {
    setFormNew({
      ...formNew, category: [...formNew.category, event.target.value],
    });
  }

  function deleteHandler(el) {
    setFormNew({
      ...formNew, category: formNew.category.filter((temp) => temp !== el),
    });
  }

  return (
    <>
      <Container className={style.container}>
        <br />
        <h1 className={style.title}>Editar Noticia</h1>
        <br />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
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
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
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
              <Form.Select
                required
                type="text"
                name="provinceOrLocation"
                value={formNew.provinceOrLocation}
                onChange={changeHandler}
              >
                <option disabled defaultValue selected>
                  Seleccione al menos una categoria
                </option>
                {pronvinces
                  ? pronvinces.map((prov) => {
                    return (
                      <option key={prov} value={prov}>
                        {prov}
                      </option>
                    );
                  })
                  : null}
              </Form.Select>
              <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Por favor ingrese la provincia o Localización de la noticia.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Categoria</Form.Label>
              <Form.Select
                required
                name="category"
                value={formNew.category}
                onChange={selectHandler}
              >
                <option disabled defaultValue> Selecciona al menos una categoria: </option>
                {categories.map((cat) => {
                  return (
                    <option key={cat.name} value={cat.name}>
                      {cat.name}
                    </option>
                  );
                })}
              </Form.Select>
              <br />
              <h4>Categorias seleccionadas: </h4>
              <div>
                {formNew.category.map((el) => (
                  <><span key={el}>{el} </span><Button onClick={() => deleteHandler(el)}>x</Button></>
                ))}
              </div>
              <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
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
          <Button
            type="submit"
            className={style.button}
            style={{ backgroundColor: "#004b82" }}
          >
            Modificar
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default ManageBlogsById;
