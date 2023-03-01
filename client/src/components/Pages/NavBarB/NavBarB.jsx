import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Grooming_Logo.png";
import s from "./NavBarB.module.css";
import Button from "react-bootstrap/Button";


// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBarB = () => {
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="Logo" />
          <span className={s.span}>Grooming</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={s.containex}>
          <Nav /*"me-auto"*/>
            <Nav.Link as={Link} to="/home" className={s.lashes}  style={{color:"white"}}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/nosotros" className={s.lashes}  style={{color:"white"}}>
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/noticias" className={s.lashes}  style={{color:"white"}}>
              Noticias
            </Nav.Link>
            <Nav.Link as={Link} to="/blog"  style={{color:"white"}}>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/contactanos" className={s.lashes}  style={{color:"white"}}>
              contactanos
            </Nav.Link>
            <NavDropdown
              title="Descargá GAPP"
              id="basic-nav-dropdown"
              className={s.lashes}
            >
              <NavDropdown.Item
                as={Link}
                to="https://play.google.com/store/apps/details?id=org.grooming.argentina.gapp2"
                className={s.lashes}
                target="_blank"
                
              >
                Android
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="https://apps.apple.com/us/app/gapp/id1407275821"
                className={s.lashes}
                target="_blank"
              >
                IOS
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button>
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
