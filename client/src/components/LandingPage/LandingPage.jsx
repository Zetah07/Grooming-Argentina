import React from "react";
import s from "./LandingPage.module.css";
import NavBarB from "../Pages/NavBarB/NavBarB";


const LandingPage = () => {
  return (
    <div className={s.background}>
      <div >
        <NavBarB />
      </div>
      <div className={s.information}>
        <h1 >Somos <span>Grooming </span>Argentina</h1>
      </div >
      <div className={s.information}>
        <h3 >
        "No dejes que el grooming te deje sin voz. Únete a nosotros para proteger a los niños y jóvenes en nuestro país."
        </h3>
      </div>
      <div className={s.buttonContainer}>
      <button className="button">
          <a
            className="text-button"
            href="https://servicios.paypertic.com/formularios/comercios/1466"
            target="_blank"
            rel="noreferrer"
          >
            ¡Dona Ahora!
          </a>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
