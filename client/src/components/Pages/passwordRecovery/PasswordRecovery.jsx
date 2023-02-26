import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "../../../api/axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import style from "./PasswordRecovery.module.css";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      showAlert(
        "Por favor ingrese una dirección de correo electrónico valida.",
        "red"
      );
      return;
    }

    try {
      const response = await axios.post("/reset", { email });

      if (response.status === 200) {
        showAlert(response.data.message, "green");
      } else {
        throw new Error("Correo no registrado");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        showAlert(error.response.data.message, "red");
      } else {
        showAlert(error.message, "red");
      }
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

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Recuperar contraseña</h1>
      <Form
        className={style.form}
        noValidate={true}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Ingrese Email registrado"
            value={email}
            validate
            onChange={handleChange}
            className={style.input}
            onKeyDown={handleKeyPress}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className={style.button}>
          Solicitar cambio de contraseña
        </Button>
      </Form>
    </div>
  );
};

export default PasswordRecovery;
