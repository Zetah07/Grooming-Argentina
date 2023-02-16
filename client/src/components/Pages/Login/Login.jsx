import React, { useState } from "react";

const Login = () => {
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

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInputChange}
            value={input.email}
          />
          {error.email ? <p>{error.email}</p> : null}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleInputChange}
            value={input.password}
          />
          {error.password ? <p>{error.password}</p> : null}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleInputChange}
            value={input.confirmPassword}
          />
          {error.confirmPassword ? <p>{error.confirmPassword}</p> : null}
        </div>
        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
