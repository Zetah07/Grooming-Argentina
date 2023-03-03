import { useState } from "react";
import Form from "react-bootstrap/Form";
import styles from "./CreateNewUser.module.css";
import axios from "../../../api/axios";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
const CreateNewUser = () => {
  const defaultValues = {
    name: "",
    username: "",
    email: "",
    password: "",
  };
  const schema = object().shape({
    email: string()
      .email("Correo invalido")
      .required("El campo no puede estar vacío")
      .matches(/^\S+@\S+\.\S+$/, "Proporcione un correo valido"),
    name: string()
      .required("El campo no puede estar vacío")
      .min(3, "Debe tener al menos 3 caracteres")
      .max(30, "Debe tener menos de 30 caracteres")
      .matches(
        /^[A-Za-z\s]+$/,
        "El campo solo puede contener letras y espacios"
      ),
    username: string()
      .required("El campo no puede estar vacío")
      .min(6, "Debe tener al menos 6 numeros")
      .max(8, "Debe tener hasta 10 numeros")
      .matches(
        /^([0-9])*$/,
        "El documento solo admite caracters numericos"
      ),
      password: string()
      // .min(6, "La contraseña debe tener al menos 6 caracteres")
      // .matches(
      //   /[A-Z]/,
      //   "La contraseña debe contener al menos una letra mayúscula"
      // ),
  });

  const {
    register,
    formState: { errors, touchedFields },
    handleSubmit,
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
    validationSchema: schema,
  });

  const [rol, setRol] = useState("user");

  const handelRolChange = (event) => {
    setRol(event.target.value);
  };

  const sendData = async (data) => {
    console.log(data);
    if (data.password.length === 0){
      data.password = data.username
    }
    data.rol = rol
    console.log(data);

    await axios
      .post("http://localhost:3500/users", data)
      .then(function (response) {
        showAlert("El ususario fue creado correctamente", "green");
      })
      .catch(function (error) {
        if (error?.response?.data?.message) {
          showAlert(error.response.data.message, "red");
        } else {
          showAlert(error.message, "red");
        }
      });
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
      document.body.removeChild(alertDiv);
    }, 3000);
  };
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 style={{ color: "#06204f" }}>Crear Nuevo usuario</h1>
      <Form className={styles.formContainer} onSubmit={handleSubmit(sendData)}>
        {/* Correo electronico */}
        <Form.Group className="d-flex flex-column align-items-start pb-3 col-lg-8">
          <Form.Label className={styles.label_volunt}>
            Dirección de correo electrónico
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@gmail.com"
            isInvalid={!!errors.email}
            isValid={touchedFields.email && !errors.email}
            {...register("email")}
          />
          <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {errors?.email?.message}
          </Form.Control.Feedback>
        </Form.Group>
        {/* Nombre y apellido */}
        <Form.Group className="d-flex flex-column align-items-start pb-3 col-lg-8">
          <Form.Label className={styles.label_volunt}>
            Nombre y apellido
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre y appellido"
            isInvalid={!!errors.name}
            isValid={touchedFields.name && !errors.name}
            {...register("name")}
          />
          <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {errors?.name?.message}
          </Form.Control.Feedback>
        </Form.Group>
        {/* Numero de documento */}
        <Form.Group className="d-flex flex-column align-items-start pb-3 col-lg-8">
          <Form.Label className={styles.label_volunt}>
            Número de Documento
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Número de Documento del usuario"
            isInvalid={!!errors.username}
            isValid={touchedFields.username && !errors.username}
            {...register("username")}
          />
          <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {errors?.username?.message}
          </Form.Control.Feedback>
        </Form.Group>
        {/* Password */}
        <Form.Group className="d-flex flex-column align-items-start pb-3 col-lg-8">
          <Form.Label className={styles.label_volunt}>Contraseña</Form.Label>
          <Form.Control
            type="text"
            placeholder="Por defecto se asignara el numero de documento"
            isInvalid={!!errors.password}
            isValid={touchedFields.password && !errors.password}
            {...register("password")}
          />
          <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {errors?.password?.message}
          </Form.Control.Feedback>
        </Form.Group>
        {/* ROl */}
        <Form.Group className="d-flex flex-column align-items-start pb-3 col-lg-8">
        <Form.Label className={styles.label_volunt}>Rol:</Form.Label>
          <Form.Select id="rol" name="rol" onChange={handelRolChange}>
            <option value="user">Usuario estandar</option>
            <option value="admin">Administrador</option>
            <option value="hr">Recursos humanos</option>
            <option value="editor">Editor</option>
            <option value="volunteer">Voluntario</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="d-flex flex-column align-items-center pb-3 col-lg-8">
          <Button
            type="submit"
            style={{ backgroundColor: "#004b82", border: "#004b82" }}
          >
            Crear
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
export default CreateNewUser;
