import React from "react";
import { Container } from "react-bootstrap";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.copy}>
          <p className={s.copy}>
            {" "}
            Copyright ©2023 All rights reserved | This template is made by{" "}
            <span className="text-decoration-underline">Henry FT-33A G12</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
