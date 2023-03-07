import React from "react";
import s from "./LandingPage.module.css";
import NavBarB from "../Pages/NavBarB/NavBarB";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={s.background}>
      <div>
        <NavBarB />
      </div>
      <div className={s.information}>
        <h1>
          Somos <span>Grooming </span>Argentina
        </h1>
      </div>
      <div className={s.information}>
        <h3>
          "No dejes que el grooming te deje sin voz. Únete a nosotros para
          proteger a los niños y jóvenes en nuestro país."
        </h3>
      </div>
      <div className={s.buttonContainer}>
        <button className="button">
          <Link className="text-button" to="/home">
            Inicio
          </Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
