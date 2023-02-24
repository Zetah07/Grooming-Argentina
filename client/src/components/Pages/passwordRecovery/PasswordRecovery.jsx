import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import style from "./PasswordRecovery.module.css";

const PasswordRecovery = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/reset", { username });

      if (response.status === 200) {
        alert(response.data.message);
      } else {
        throw new Error("El usuario no existe");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    }
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <h1 className={style.title}>Recuperar contraseña</h1>
        <Form
          className={style.form}
          noValidate={true}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Ingrese nombre de Usuario"
              value={username}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className={style.button}>
            Solicitar cambio de contraseña
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
