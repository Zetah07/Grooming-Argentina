import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.footer}>
      <Container>
        <div className={s.copy}>
          <p className={s.copy}>
            {" "}
            Copyright ©2023 All rights reserved | This template is made by{" "}
            <span className="text-decoration-underline">Henry FT-33A G12</span>
          </p>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
