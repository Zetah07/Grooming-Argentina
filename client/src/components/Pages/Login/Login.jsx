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
import { getLogin } from "../../../Redux/Actions";

const Login = () => {

  const [input, setInput] = useState({
    username: "",
    password: "",
  })
  const [error, setError] = useState({
    username: "",
    password: "",
  })

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
    });
  }


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
    }


  return (
    <div className={Style.container}>
      <div className={Style.loginContainer}>
        <div className={Style.img}>
          <BiUserCircle />
        </div>
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
        </form>
      </div>
    </div>
  );
};

export default Login;
