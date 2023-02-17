import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Grooming_Logo.png';
import s from './NavBarA.module.css'
import Button from 'react-bootstrap/Button';


// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBarA = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand as={Link} to='/'>
          <img src={Logo} alt="Logo" />
          <span className={s.span}>Grooming</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={s.containex}>
          <Nav   /*"me-auto"*/ >
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/nosotros'>Nosotros</Nav.Link>
            <Nav.Link as={Link} to='/noticias/1'>Noticias</Nav.Link>
            <Nav.Link as={Link} to='/contactanos'>contactanos</Nav.Link>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>

          </Nav>
          <Button><Nav.Link as={Link} to='/voluntariado'>Ser Voluntario</Nav.Link></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarA;