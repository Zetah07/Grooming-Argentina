import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Grooming_Logo.png';
import s from './NavBarB.module.css'
import Button from 'react-bootstrap/Button';


// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBarB = () => {
    return (
        <Navbar expand="lg" sticky='top'>
            <Container >
                <Navbar.Brand as={Link} to='/'>
                    <img src={Logo} alt="Logo" />
                    <span className={s.span}>Grooming</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={s.containex}>
                    <Nav   /*"me-auto"*/ >
                        <Nav.Link as={Link} to='/home' className={s.lashes}>Home</Nav.Link>
                        <Nav.Link as={Link} to='/nosotros' className={s.lashes}>Nosotros</Nav.Link>
                        <Nav.Link as={Link} to='/noticias' className={s.lashes}>Noticias</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        <Nav.Link as={Link} to='/contactanos' className={s.lashes}>contactanos</Nav.Link>
                        <Nav.Link as={Link} to='/login' ><i className="bi bi-person "></i></Nav.Link>
                    </Nav>
                    <Button><Nav.Link as={Link} to='/voluntariado'>Ser Voluntario</Nav.Link></Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarB;
