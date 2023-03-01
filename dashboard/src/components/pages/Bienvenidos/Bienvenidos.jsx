import style from "./Bienvenido.module.css";
import React, { useEffect, useState } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import useAuth from "../../../hooks/useAuth";

const Bienvenidos = () => {
  const [username, setUsername] = useState('');
  const {auth} = useAuth()
  console.log(auth);
  const dni = localStorage.getItem('dni');

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/usuarios/${dni}`);
        setUsername(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsername();
  }, [dni]);

  
  

  return (
      <Container>
    <div className={style.container}>
      <div className={style.desing}>
        <Jumbotron>
        <div class="container-md">
          <h1 class="g-col-6">Bienvenido</h1>
          <h3>Para nosotros es un gusto tenerte aquí, {username.name}!</h3>
        </div>
        </Jumbotron>
      </div>
    </div>
      </Container>
  );
};
export default Bienvenidos;
