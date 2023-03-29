import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import LogoB from '../../../assets/LogoB.png';
import s from './NavBarA.module.css';
import Button from 'react-bootstrap/Button';
import NewsLetterA from '../../NewsLetterA/NewsLetterA';

const NavBarA = () => {
  return (
    <Navbar bg='light' expand='lg' sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img src={LogoB} alt='Logo' className={s.image} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className={s.containex}>
          <Nav /*"me-auto"*/>
            <Nav.Link as={Link} to='/home' className={s.lashes}>
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to='/nosotros' className={s.lashes}>
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to='/noticias' className={s.lashes}>
              Noticias
            </Nav.Link>
            <Nav.Link as={Link} to='/blog' className={s.lashes}>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to='/contactanos' className={s.lashes}>
              Contactanos
            </Nav.Link>
            <div
              className={s.lashes}
              style={{ marginTop: 7, marginRight: 2, zIndex: '1000' }}
            >
              Descarga La APP
            </div>
            <NavDropdown id='basic-nav-dropdown'>
              <NavDropdown.Item
                as={Link}
                to='https://play.google.com/store/apps/details?id=org.grooming.argentina.gapp2'
                target='_blank'
              >
                Android
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to='https://apps.apple.com/us/app/gapp/id1407275821'
                target='_blank'
              >
                IOS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to='/denuncias'
              className={s.lashes}
              style={{
                color: 'red',
                fontWeight: 'bold',
              }}
            >
              Denunciar Aquí
            </Nav.Link>
            <NewsLetterA />
          </Nav>
          <Button
            style={{ backgroundColor: '#004b82', borderColor: '#004b82' }}
          >
            <Nav.Link as={Link} to='/voluntariado'>
              Ser Voluntario
            </Nav.Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarA;
