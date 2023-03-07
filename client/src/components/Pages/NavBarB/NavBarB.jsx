import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Grooming_Logo.png";
import s from "./NavBarB.module.css";
import Button from "react-bootstrap/Button";
import NewsLetter from "../../NewsLetter/NewsLetter";

// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBarB = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ color: "#7dc8ec" }}
        />
        <Navbar.Collapse id="basic-navbar-nav" className={s.containex}>
          <Nav /*"me-auto"*/>
            <Nav.Link
              as={Link}
              to="/home"
              className={s.lashes}
              style={{ color: "white" }}
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/nosotros"
              className={s.lashes}
              style={{ color: "white" }}
            >
              Nosotros
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/noticias"
              className={s.lashes}
              style={{ color: "white" }}
            >
              Noticias
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/blog"
              className={s.lashes}
              style={{ color: "white" }}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contactanos"
              className={s.lashes}
              style={{ color: "white" }}
            >
              contactanos
            </Nav.Link>
            <div
              className={s.lashes}
              style={{ marginTop: 7, marginRight: 2, zIndex: "1000" }}
            >
              Descarga La APP
            </div>
            <NavDropdown id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="https://play.google.com/store/apps/details?id=org.grooming.argentina.gapp2"
                target="_blank"
              >
                Android
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="https://apps.apple.com/us/app/gapp/id1407275821"
                c
                target="_blank"
              >
                IOS
              </NavDropdown.Item>
            </NavDropdown>
            <NewsLetter className={s.lashes} style={{ color: "black" }} />
          </Nav>
          <Button
            style={{ backgroundColor: "#004b82", borderColor: "#004b82" }}
          >
            <Nav.Link as={Link} to="/voluntariado">
              Ser Voluntario
            </Nav.Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarB;
