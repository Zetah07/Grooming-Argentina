/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { NavLink, Link } from "react-router-dom";
import s from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={s.container}>
      <Link to="/noticias">
        <h4>Noticias</h4>
      </Link>
      <NavLink to="/contacto">
        <h4>Contacto</h4>
      </NavLink>
      <NavLink to="/home">
        <h4>Home</h4>
      </NavLink>
    </div>
  );
};

export default NavBar;
