import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import LogoB from "../../../assets/LogoB.png";
import s from "./NavBarA.module.css";
import Button from "react-bootstrap/Button";
import NewsLetter from "../../NewsLetter/NewsLetter";

const NavBarA = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={LogoB} alt="Logo" className={s.image} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={s.containex}>
          <Nav /*"me-auto"*/>
            <Nav.Link as={Link} to="/home">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/nosotros">
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/noticias">
              Noticias
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/contactanos">
              Contactanos
            </Nav.Link>
            <NavDropdown title="Descarga la APP" id="basic-nav-dropdown">
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
                target="_blank"
              >
                IOS
              </NavDropdown.Item>
            </NavDropdown>
            <NewsLetter />
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

export default NavBarA;
