import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Style from "./Login.module.css";
import { BiUserCircle } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

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
    email: "",
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

    if (!input.email) {
      formIsValid = false;
      errors.email = "Email is required";
    }

    if (!input.password) {
      formIsValid = false;
      errors.password = "Password is required";
    }

    if (!input.confirmPassword) {
      formIsValid = false;
      errors.confirmPassword = "Confirm Password is required";
    }

    if (input.password !== input.confirmPassword) {
      formIsValid = false;
      errors.confirmPassword = "Passwords must match";
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
              <AiOutlineMail />
            </span>
            <input
              class="form-control"
              id="floatingInputGroup1"
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleInputChange}
              value={input.email}
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
              placeholder="Enter password"
              onChange={handleInputChange}
              value={input.password}
            />
            <label for="floatingInputGroup2"></label>
            {error.password ? <p>{error.password}</p> : null}
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              <RiLockPasswordLine />
            </span>
            <input
              class="form-control"
              id="floatingInputGroup3"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              onChange={handleInputChange}
              value={input.confirmPassword}
            />
            <label for="floatingInputGroup3"></label>
            {error.confirmPassword ? <p>{error.confirmPassword}</p> : null}
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
