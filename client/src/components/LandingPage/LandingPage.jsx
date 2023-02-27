import React from "react";
import s from "./LandingPage.module.css";
import Container from "react-bootstrap/esm/Container";
import NavBarB from "../Pages/NavBarB/NavBarB";
// import Button from "react-bootstrap/esm/Button";
// import NavBar from "../Pages/NavBarA/NavBarA";

const LandingPage = () => {
  return (
    <div className={s.background}>
      <NavBarB />
      <Container className={s.information}>
        <h1>Aqui debemos poner <span>una frase</span> que los describa</h1>
        <h2>
          En Grooming Argentina consideramos que la prevención es fundamental para evitar este flagelo y trabajamos en consecuencia de ello. No existe vacuna contra el grooming, por lo que las charlas y talleres de concientización, tanto para adultos como para niños,
          son de fundamental importancia para erradicar este delito.
        </h2>
        <button className="button">
          <a
            className="text-button"
            href="https://servicios.paypertic.com/formularios/comercios/1466"
            target="_blank"
            rel="noreferrer"
          >
            Dona Ahora
          </a>
        </button>

      </Container>
    </div>
  );
};

export default LandingPage;
