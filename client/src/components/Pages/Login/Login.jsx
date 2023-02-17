import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Style from "./Login.module.css";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineIdentification } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";


function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const Login = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const [input, setInput] = useState({
    dni: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const validateInput = (e) => {
    e.preventDefault();
    let errors = {};
    let formIsValid = true;

    if (!input.dni) {
      formIsValid = false;
      errors.dni = "DNI is required";
    }

    if (!input.password) {
      formIsValid = false;
      errors.password = "Password is required";
    }
    setError(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    let formIsValid = true;
    if (!validateInput(e)) {
      formIsValid = false;
      errors = validateInput(e);
    }
    setError(errors);
    return formIsValid;
  };

  const handleClick = () => setLoading(true);

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
              type="DNI"
              name="DNI"
              placeholder="Ingresa DNI"
              onChange={handleInputChange}
              value={input.dni}
            />
            <label for="floatingInputGroup1"></label>
            {error.email ? <p>{error.email}</p> : null}
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
            {error.password ? <p>{error.password}</p> : null}
          </div>
          <Button
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
          >
            {isLoading ? "Loading…" : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
