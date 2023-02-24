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
import { getLogin } from "../../../Redux/Actions";

const Login = () => {
<<<<<<< HEAD

  const [input, setInput] = useState({
    username: "",
    password: "",
  })
=======
  const [input, setinput] = useState({
    username: "",
    password: "",
  });

>>>>>>> f86fcfaf892444b6c120441d07899d8c47677196
  const [error, setError] = useState({
    username: "",
    password: "",
  });

<<<<<<< HEAD
  // useEffect(() => {
  //   if (user=== true) {
  //     window.location.href = "/noticias";
  //   }else{
  //     console.log('no logueado');
  //   }
  // }, [user])

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
=======
  const handleInputChange = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
>>>>>>> f86fcfaf892444b6c120441d07899d8c47677196
    });
  };

<<<<<<< HEAD

    const handleSubmit = async (event) => {
      event.preventDefault();
        let res =await axios.post("/auth/login",input)
        console.log (res.data);
      }

    

    const handleClick =(event) =>{
      setInput({
        ...input, 
        [event.target.name]: event.target.value
      }) 
=======
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
>>>>>>> f86fcfaf892444b6c120441d07899d8c47677196
    }
  };

  return (
    <div className={Style.container}>
      <div className={Style.loginContainer}>
        <div className={Style.img}>
          <BiUserCircle />
        </div>
<<<<<<< HEAD
        <form className="needs-validation" noValidate={true} autoComplete="off" onSubmit={handleSubmit}>
          <div class="input-group mb-3">
            <span class="input-group-text">
              <HiOutlineIdentification />
            </span>
            <input
              class="form-control"
              id="floatingInputGroup1"
              type="number"
              name="username"
              placeholder="Ingresa username"
              onChange={handleInputChange}
              value={input.username}
            />
            <label for="floatingInputGroup1"></label>
            <span class="invalid-feedback">
              {error.username && <p>{error.username}</p>}
            </span>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              <RiLockPasswordLine />
            </span>
            <input
              class="form-control"
              id="floatingInputGroup2"
              type="password"
              name="password"
              placeholder="Ingresa contraseña"
              onChange={handleInputChange}
              value={input.password}
            />
            <label for="floatingInputGroup2"></label>
            {error.password && <p>{error.password}</p>}
          </div>
          <Button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handleClick}
          >
            Ingresar
          </Button> <br/>
          <a href="/rest" className="small bg-center"> Olvidaste tu contraseña</a>
=======
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
          <a href="/rest" className={Style.forgot}>
            Olvidaste tu contraseña
          </a>
>>>>>>> f86fcfaf892444b6c120441d07899d8c47677196
        </form>
      </div>
    </div>
  );
};

export default Login;
