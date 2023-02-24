import { useState } from "react";
import axios from "../../../api/axios";
import { Form, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
// import style from "./PasswordReset.module.css";

const PasswordReset = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const token = window.location.pathname.split("/").pop();
      await axios.put(`/users`, { token, newPass: password });
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (success) {
    return <p>Tu contraseña ha sido cambiada exitosamente</p>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Resetear Contraseña</h2>
      <Form.Group>
        <Form.Label>Nueva Contraseña</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={handleChangePassword}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Confirmar Nueva Contraseña</Form.Label>
        <Form.Control
          type="password"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          required
        />
      </Form.Group>
      {error && <p>{error}</p>}
      <Button type="submit">Resetear Contraseña</Button>
    </Form>
  );
};

export default PasswordReset;
