import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import { FormControl, Button } from "react-bootstrap";
import Style from "./Login.module.css";
import { BiUserCircle } from "react-icons/bi";

const LOGIN_URL = "/auth/login";
const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard";
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
      setAuth({ user: input.username, pwd: input.password, accessToken, rol });
      setinput({ username: "", password: "" });
      navigate(from, { replace: true });
    } catch (error) {
      if (!error?.response) {
        alert("No server response");
      } else if (error.response?.status === 400) {
        alert("missing username or password");
      } else if (error.response?.status === 402) {
        alert("Unauthorized");
      } else {
        setinput({ ...input, password: "" });
        alert("Login failed");
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
