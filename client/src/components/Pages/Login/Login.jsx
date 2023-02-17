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
const [dni, SetDni]= useState('');
const [password, SetPassword]= useState('');
const [success, setSuccess] = useState('');
const [isLoading, setLoading] = useState(false);
const [input, setInput] = useState({
  dni:'',
  password:''
})
const [error, setError] = useState({
  dni:'',
  password:''
});

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
    .post("/login", {
        dni: dni,
        password: password,
      })
    // .then((res) => {
    //   if (res.data.success) {
    //     setSuccess(res.data.success);
    //     localStorage.setItem("token", res.data.token);
    //     localStorage.setItem("user", JSON.stringify(res.data.user));

    //   } else {
    //     setError(res.data.error);
    //   }
    //   setLoading(false);
    // })
  .catch((err) => {
    setError(err.response.data.error);
    setLoading(false);
  });

  const handleInputChange = (data) =>{
    setInput({
    ...input,
      [data.target.name]: data.target.value
    })
  }

  const handleClick = (data) =>{
    setInput({
    ...input,
      [data.target.name]: data.target.value
    })
  }



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
            <div class="invalid-feedback">
              {error.dni}
              <span class="d-block">{error.dni.length > 0 && error.dni}</span>
            </div>
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
            {isLoading ? "Cargando..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
  }}


export default Login;
