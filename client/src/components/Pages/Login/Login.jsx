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

  const [date, setDate] = useState({
    dni: "",
    password: "",
  })

  const [error, setError] = useState({
    dni: "",
    password: "",
  })

  const handleInputChange = (e) => {
    setDate({
      ...date,
      [e.target.name]: e.target.value,
    });
  }

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(!e.target.checkValidity()){
        console.log('no enviar');
      }else{
        let res =await axios.post("/auth/login", date)
        console.log (res.data);
      }
    }

    const handleClick =(e) =>{
      setDate({
        ...date, 
        [e.target.name]: e.target.value
      }) 
    }


  return (
    <div className={Style.container}>
      <div className={Style.loginContainer}>
        <div className={Style.img}>
          <BiUserCircle />
        </div>
        <form className="needs-validartion" noValidate={true} autoComplete="off" onSubmit={handleSubmit}>
          <div class="input-group mb-3">
            <span class="input-group-text">
              <HiOutlineIdentification />
            </span>
            <input
              class="form-control"
              id="floatingInputGroup1"
              type="number"
              name="dni"
              placeholder="Ingresa DNI"
              onChange={handleInputChange}
              value={date.dni}
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
              value={date.password}
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
          </Button>
          <a href="/rest" className="float-end"> Olvidaste tu contraseña</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
