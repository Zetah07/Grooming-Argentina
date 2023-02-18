import React from "react";
import s from "./LandingPage.module.css";
import Container from "react-bootstrap/esm/Container";
// import Button from "react-bootstrap/esm/Button";
// import NavBar from "../Pages/NavBarA/NavBarA";

const LandingPage = () => {
  return (
    <div className={s.background}>
      {/* <NavBar className={s.NavBar} /> */}
      <Container className={s.information}>
        <h1>Ahora  si soy un  <span>Puto</span> Responsive</h1>
        <h2>
          This help is focussed towards the poor and the needy who live among
          us within our society and endeavours to bring about a change in
          their life - a "GROOMING ARGENTINA".
        </h2>
        <button className="button">
          <a
            className="text-button"
            href="https://servicios.paypertic.com/formularios/comercios/1466"
            target="_blank"
            rel="noreferrer"
          >
            Donate Now
          </a>
        </button>
        {/* <Button variant="contained" color="primary" >
          <a
            // className="text-btn"
            href="https://servicios.paypertic.com/formularios/comercios/1466"
            target="_blank"
            rel="noreferrer"
          >
            Donate Now
          </a>
        </Button> */}
      </Container>
    </div>
  );
};

export default LandingPage;
