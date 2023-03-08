import React, { useState, useEffect } from "react";
import { Container, Form, Button, FormGroup, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { object, string, mixed, array, lazy } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import s from "./CreateNew.module.css";
import axios from "../../api/axios";
import showAlert from "../ShowAlert/ShowAlert";
import useAuth from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/Actions";

const CreateNew = () => {
    const { auth } = useAuth();
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    const pronvinces = ["Buenos Aires", "Ciudad Autónoma de Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego, Antártida e Islas del Atlántico Sur", "Tucumán"]

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const [defaultValues, setDefaultValues] = useState({
        title: "",
        img: "",
        description: "",
        link: "",
        category: [],
        provinceOrLocation: "",
    });

    function selectHandler(event) {
        setDefaultValues({
            ...defaultValues,
            category: [...defaultValues.category, event.target.value],
        });
    }

    function deleteHandler(el) {
        setDefaultValues({
            ...defaultValues,
            category: defaultValues.category.filter((cat) => cat !== el),
        });
    }

    const schema = object().shape({
        title: string()
            .required("El campo no puede estar vacío")
            .min(3, "Debe tener al menos 3 caracteres")
            .max(40, "Debe tener menos de 40 caracteres"),
        description: string()
            .required("El campo no puede estar vacío")
            .min(3, "Debe tener al menos 3 caracteres"),
        link: string()
            .required("El campo no puede estar vacío"),
        provinceOrLocation: string()
            .required("El campo no puede estar vacío"),
        category: array()
            .required("El campo no puede estar vacío"),
        img: mixed()
            .required("Debe adjuntar la imagen en formato JPG, JPEG o PNG.")
            .test("fileType", "Solo se permiten archivos JPG, JPEG o PNG", (value) => {
                if (value[0].type === "image/jpeg") {
                    return value && value[0].type === "image/jpeg";
                }
                else if (value[0].type === "image/png") {
                    return value && value[0].type === "image/png";
                }
            })
            .test(
                "fileSize",
                "El tamaño del archivo no debe exceder 1 MB",
                (value) => {
                    return value && value[0].size <= 1048576; // es  1MB
                }
            ),
    });

    const {
        register,
        formState: { errors, touchedFields },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onTouched",
        reValidateMode: "onChange",
        resolver: yupResolver(schema),
        defaultValues: defaultValues,
        validationSchema: schema,
    });

    const sendFormData = async (data) => {
        const formData = new FormData();
        formData.append("img", data.img[0]);
        formData.append("CreateNew", JSON.stringify(data));

        await axios.post("/news", formData, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${auth?.accessToken}`,
                "Content-Type": "multipart/form-data"
            },
        })
            .then((res) => {
                showAlert("Se realizó la creación de la noticia solicitada", "green");
            })
            .catch((error) => {
                if (
                    error.response &&
                    error.response.data &&
                    error.response.data.message
                ) {
                    showAlert(error.response.data.message, "red");
                } else {
                    showAlert(error.message, "red");
                }
            });
        reset(defaultValues);
    };

    return (
        <>
            <br />
            <h1 className={s.title}>Crear Noticia</h1>
            <br />
            <div className="container">
                <Form noValidate onSubmit={handleSubmit(sendFormData)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4">
                            <Form.Label>Titulo:</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                required
                                isInvalid={!!errors.title}
                                isValid={touchedFields.title && !errors.title}
                                {...register("title")}
                            />
                            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                {errors?.title?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Imagen en formato JPG, JPEG o PNG</Form.Label>
                            <Form.Control
                                type="file"
                                name="img"
                                required
                                placeholder="Adjunte la imagen en formato JPG, JPEG o PNG..."
                                isInvalid={!!errors.img}
                                isValid={touchedFields.img && !errors.img}
                                {...register("img")}
                            />
                            <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                {errors?.img?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Link adicional</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="Url"
                                    name="link"
                                    placeholder="Ingrese el enlace externo de la noticia"
                                    aria-describedby="inputGroupPrepend"
                                    isInvalid={!!errors.link}
                                    isValid={touchedFields.link && !errors.link}
                                    {...register("link")}
                                />
                            </InputGroup>
                            <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                {errors?.link?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" >
                            <Form.Label>Provincia o Localización:</Form.Label>
                            <Form.Select
                                required
                                name="provinceOrLocation"
                                isInvalid={!!errors.provinceOrLocation}
                                isValid={touchedFields.provinceOrLocation && !errors.provinceOrLocation}
                                {...register("provinceOrLocation")}
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
                                {errors?.provinceOrLocation?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Categoria</Form.Label>
                            <div key={`inline-checkbox`} className="mb-3">
                                {categories
                                    ? categories.map((cat) => {
                                        return (
                                            <Form.Check
                                                inline
                                                label={cat.name}
                                                key={cat._id}
                                                name="category"
                                                type="checkbox"
                                                id={cat._id}
                                                value={cat.name}
                                                required
                                                isInvalid={!!errors.category}
                                                isValid={touchedFields.category && !errors.category}
                                                {...register("category")}
                                            />
                                        );
                                    })
                                    : null}
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className={s.label}>
                                Descripción de la noticia:
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                rows={3}
                                required
                                isInvalid={!!errors.description}
                                isValid={touchedFields.description && !errors.description}
                                {...register("description")}
                            />
                            <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                {errors?.description?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
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
}

export default CreateNew;