import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { FormControl, Button } from "react-bootstrap";
import Style from "./Login.module.css";
import { BiUserCircle } from "react-icons/bi";



const LOGIN_URL = "/auth/login";
const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/panel/bienvenidos";
  const [input, setinput] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username: input.username, password: input.password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      const rol = response?.data?.roles;
      setAuth({ user: input.username, accessToken, rol });
      setinput({ username: "", password: "" });
      navigate(from, { replace: true });
    } catch (error) {
      if (!error?.response) {
        showAlert("Sin respuesta del servidor");
      } else if (error.response?.status === 400) {
        showAlert("Nombre de usuario o contraseña incorrecta");
      } else if (error.response?.status === 402) {
        showAlert("No autorizado");
      } else {
        setinput({ ...input, password: "" });
        showAlert("Error al iniciar sesión");
      }
    }
  };

  const showAlert = (message) => {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", "alert-danger", "text-center");
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);
    setTimeout(() => {
      alertDiv.classList.add("hide");
      setTimeout(() => {
        document.body.removeChild(alertDiv);
      }, 600);
    }, 3000);
  };

  const handleClick = (event) => {
    setinput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  };

  return (
    <div className={Style.container}>
      <div className={Style.loginContainer}>
        <div className={Style.img}>
          <BiUserCircle />
        </div>
        <form
          className="needs-validartion"
          noValidate={true}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className={Style.inputContainer}>
            <FormControl
              type="text"
              id="usernameInput"
              name="username"
              placeholder="Ingrese número de DNI"
              value={input.username}
              onChange={handleInputChange}
              isInvalid={!!error.username}
              onKeyDown={handleKeyPress}
              className={Style.input}
            />
            <FormControl.Feedback type="invalid" className={Style.feedback}>
              {error.username}
            </FormControl.Feedback>

            <FormControl
              type="password"
              id="passwordInput"
              name="password"
              placeholder="Ingrese contraseña"
              value={input.password}
              onChange={handleInputChange}
              isInvalid={!!error.password}
              onKeyDown={handleKeyPress}
              className={Style.input}
            />
            <FormControl.Feedback type="invalid" className={Style.feedback}>
              {error.password}
            </FormControl.Feedback>
          </div>
          <br />
          <div className={Style.buttonContainer}>
          <Button type="submit" className={Style.button} onClick={handleClick}>
            Ingresar
          </Button>
          <br />
          <a href="/recuperar" className={Style.forgot}>
            Olvidaste tu contraseña
          </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
