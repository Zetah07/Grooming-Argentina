/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FormControl, Button } from "react-bootstrap";
import Style from "./Login.module.css";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineIdentification } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
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
    console.log(input);
    if (!event.target.checkValidity()) {
      console.log("no enviar");
    } else {
      try {
        const response = await axios.post("/auth/login", input);
        const { token } = response.data;
        localStorage.setItem("token", token);
        window.location.href = "noticias";
      } catch (error) {
        console.log(error);

        setError({
          ...error,
          username: "Nombre de usuario invalido",
          password: "Contraseña invalida",
        });
      }
    }
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
            <div className={Style.input}>
              <FormControl
                type="text"
                id="usernameInput"
                name="username"
                placeholder="Ingresa DNI"
                value={input.username}
                onChange={handleInputChange}
                isInvalid={!!error.username}
                onKeyDown={handleKeyPress}
              />
              <FormControl.Feedback type="invalid" className={Style.feedback}>
                {error.username}
              </FormControl.Feedback>
            </div>
            <div className={Style.input}>
              <FormControl
                type="password"
                id="passwordInput"
                name="password"
                placeholder="Ingresa contraseña"
                value={input.password}
                onChange={handleInputChange}
                isInvalid={!!error.password}
                onKeyDown={handleKeyPress}
              />
              <FormControl.Feedback type="invalid" className={Style.feedback}>
                {error.password}
              </FormControl.Feedback>
            </div>
          </div>
          <br />
          <Button type="submit" className={Style.button} onClick={handleClick}>
            Ingresar
          </Button>
          <br />
          <a href="/recuperar" className={Style.forgot}>
            Olvidaste tu contraseña
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
