/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "../../../api/axios";
import { Form, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import style from "./PasswordReset.module.css";
import showAlert from "../../ShowAlert/ShowAlert";

const PasswordReset = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      showAlert("Las contraseñas no coinciden", "red");
      return;
    }

    if (password.length < 6) {
      showAlert("La contraseña debe tener al menos 6 caracteres", "red");
      return;
    }

    if (!password.match(/[A-Z]/)) {
      showAlert(
        "La contraseña debe contener al menos una letra mayúscula",
        "red"
      );
      return;
    }

    try {
      const token = window.location.pathname.split("/").pop();
      await axios.put(`/users`, { token, newPass: password });
      setSuccess(true);

      showAlert("Su contraseña ha sido cambiada exitosamente", "green");

      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (error) {
      const errorMessage = error.response.data.message;
      showAlert(errorMessage, "red");
    }
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  };

  if (success) {
    return (
      <div className={style.success}>
        <p>será redirigido a la pagina de inicio de sesión</p>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <Form onSubmit={handleSubmit}>
        <h1 className={style.title}>Resetear Contraseña</h1>
        <h3 className={style.underTitle}>
          *Debe contener al menos una mayúscula y 6 caracteres
        </h3>
        <Form.Group>
          <Form.Control
            type="password"
            value={password}
            onChange={handleChangePassword}
            required
            placeholder="Nueva Contraseña"
            className={style.input}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            required
            placeholder="Confirmar Nueva Contraseña"
            className={style.input}
            onKeyDown={handleKeyPress}
          />
        </Form.Group>
        {error && <p className="alert alert-danger text-center">{error}</p>}
        <Button type="submit">Resetear Contraseña</Button>
      </Form>
    </div>
  );
};

export default PasswordReset;
