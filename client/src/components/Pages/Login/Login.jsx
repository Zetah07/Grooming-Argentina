/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Style from "./Login.module.css";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineIdentification } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const dispach = useDispatch();
  const [dni, SetDni] = useState("");
  const [password, SetPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [input, setInput] = useState({
    dni: "",
    password: "",
  });
  const [error, setError] = useState({
    dni: "",
    password: "",
  });

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.dni === "" || input.password === "") {
      setError({
        ...error,
        [e.target.name]: "Campo requerido",
      });
    } else {
      setError({
        ...error,
        ...input,
      });
    }
    if (!input.dni === "" || !input.password === "") {
      setSuccess("");
    } else {
      setSuccess("Bienvenido");
    }
    if (input.dni === "" || input.password === "") {
      setLoading(true);
    } else {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }

    const handleClick = (data) => {
      setInput({
        ...input,
        [data.target.name]: data.target.value,
      });
    };

    const validateInput = (form) => {
      let setError = false;
      let error = {};
      if (form.dni.length <= 8) {
        setError = true;
        error.dni = "El DNI debe tener al menos 8 caracteres";
      }
      if (!form.dni.match(/[0-9]/g)) {
        setError = true;
        error.dni = "El DNI debe contener solo numeros";
      }
      if (form.password.length <= 8) {
        setError = true;
        error.password = "La contraseña debe tener al menos 8 caracteres";
      }
      return setError ? error : null;
    };

    return (
      <div className={Style.container}>
        <div className={Style.loginContainer}>
          <div className={Style.img}>
            <BiUserCircle />
          </div>
          <form onSubmit={handleSubmit}>
            <div class="input-group mb-3">
              <span class="input-group-text">
                <HiOutlineIdentification />
              </span>
              <input
                class="form-control"
                id="floatingInputGroup1"
                type="number"
                name="DNI"
                placeholder="Ingresa DNI"
                onChange={handleInputChange}
                value={input.dni}
              />
              <label for="floatingInputGroup1"></label>
              <span class="invalid-feedback">
                {error.dni && <p>{error.dni}</p>}
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
              disabled={isLoading}
              onClick={!isLoading ? handleClick : null}
            >
              Ingresar
            </Button>
          </form>
        </div>
      </div>
    );
  };
};

export default Login;
