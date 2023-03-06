import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../../assets/LogoB.png";
import s from './CreateCourse.module.css';
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import showAlert from "../../ShowAlert/ShowAlert";



const CreateCourse = () => {

    const { auth } = useAuth();

    const defaultValues = {
        title: "",
        description: "",
        thumbnail: "",
        link: "",
    }

    const schema = object().shape({
        title: string()
            .required("El campo no puede estar vacío")
            .min(3, "Debe tener al menos 3 caracteres")
            .max(255, "Debe tener menos de 255 caracteres"),
        link: string()
            .required("El campo no puede estar vacío")
            .url("Ingrese una URL válida"),
        thumbnail: string()
            .required("El campo no puede estar vacío")
            .url("Ingrese una URL válida"),
        description: string()
            .required("El campo no puede estar vacío")
            .min(3, "Debe tener al menos 3 caracteres")
            .max(255, "Debe tener menos de 255 caracteres"),
    });

    const {
        register,
        formState: { errors, touchedFields },
        handleSubmit,
        //reset,
    } = useForm({
        mode: "onTouched",
        reValidateMode: "onChange",
        resolver: yupResolver(schema),
        defaultValues: defaultValues,
        validationSchema: schema,
    });



    const upVideoCourse = async (data) => {
        console.log(data)
        // try {
        //     await axios.post("http://localhost:3500/courses", data, {
        //         withCredentials: true,
        //         headers: {
        //             Authorization: `Bearer ${auth?.accessToken}`,
        //         },
        //     });
        //     showAlert("Video curso creado correctamente.", "green");
        //     // form.reset();
        //     // setFormBlog({ title: "", subtitle: "", content: "" });
        //     // setValidated(false);
        // } catch (error) {
        //     console.log(error.message);
        //     showAlert("No se pudo crear el video curso , intente de nuevo", "red");
        // }
    };


    return (
        <Container>
            <div className={s.head_ccourse}>
                <div>
                    <img src={logo} alt="Logo" className={s.logo_ccourse} />
                </div>
                <div>
                    <h1>Ingresa un Video Curso Nuevo</h1>
                </div>
            </div>
            <Form noValidate className={s.formPd} onSubmit={handleSubmit(upVideoCourse)} >
                <Form.Group className="d-flex flex-column align-items-start pb-3">
                    <Form.Label className={s.label_ccourse}>
                        Título:
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa el Título del Video curso"
                        isInvalid={!!errors.title}
                        isValid={touchedFields.title && !errors.title}
                        {...register("title")}
                    />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        {errors?.title?.message}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="d-flex flex-column align-items-start pb-3 ">
                    <Form.Label className={s.label_ccourse}>
                        Link del Video Curso:
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="https://vimeo.com/..."
                        isInvalid={!!errors.link}
                        isValid={touchedFields.link && !errors.link}
                        {...register("link")}
                    />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        {errors?.link?.message}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="d-flex flex-column align-items-start pb-3 ">
                    <Form.Label className={s.label_ccourse}>
                        Link de la imagen miniatura:
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="https://..."
                        isInvalid={!!errors.thumbnail}
                        isValid={touchedFields.thumbnail && !errors.thumbnail}
                        {...register("thumbnail")}
                    />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        {errors?.thumbnail?.message}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="d-flex flex-column align-items-start pb-3 ">
                    <Form.Label className={s.label_ccourse}>
                        Descripción del video curso:
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Ingrese descripción"
                        isInvalid={!!errors.description}
                        isValid={touchedFields.description && !errors.description}
                        {...register("description")}
                    />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        {errors?.description?.message}
                    </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Form.Group className="d-flex flex-column align-items-center pb-3">
                    <Button className={s.btnZ} type="submit">Crear Curso</Button>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default CreateCourse;