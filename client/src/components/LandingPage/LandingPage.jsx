import React from "react";
import { Button } from "@mui/material"

import s from "./LandingPage.module.css";
import NavBar from "../Pages/NavBar/NavBar";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <div className={s.background}>
        <div className={s.information}>
          <h1>Your <span>support</span> can help us a lot</h1>
          <h2>
            This help is focussed towards the poor and the needy who live among
            us within our society and endeavours to bring about a change in
            their life - a "GROOMING ARGENTINA".
          </h2>
          <Button className="btn" size="large" variant="contained" color="primary" sx={{borderRadius: 60}}>
            <a
              className="text-btn"
              href="https://servicios.paypertic.com/formularios/comercios/1466"
              target="_blank"
              rel="noreferrer"
            >
              Donate Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
