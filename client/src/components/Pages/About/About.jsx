import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Banner from '../../../assets/c387.jpg';
import imgUs from "../../../assets/CC42AH4J2RDO3JQ34RN6JDKOKA.jpg";
import s from "./About.module.css";

const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className={s.banner}>
            <h1>Acerca de Nosotros</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <img src={imgUs} alt="img_us" />
          </Col>
          <Col>
            <div>
              <h4>¿QUIÉNES SOMOS?</h4>
              <p text="end">
                Grooming Argentina nació Institucionalmente en el año 2014 y se
                convirtió en la primera Organización global creada para combatir
                el delito de «grooming o child grooming». Fue originada con el
                propósito de trabajar fundamentalmente sobre ejes basados en la
                prevención y concientización en pos de la erradicación del
                grooming en Argentina y América Latina. La ONG se encuentra
                conformada por un grupo multidisciplinario de profesionales
                técnicos y voluntarios idóneos no técnicos, destinado a tratar
                este flagelo que avanza de manera alarmante con el advenimiento
                de los medios sociales de comunicación y las nuevas tecnologías.
                El eje central de la Institución está orientado al
                fortalecimiento de las acciones diarias tendientes a la
                prevención así como también al acompañamiento y asistencia de
                las víctimas y sus familias. A su vez, cuenta con la novedosa
                app de denuncias «GAPP» gratuita y de alcance global, que
                permite denunciar el delito con tan solo «presionar un botón».
                Grooming Argentina se encuentra a la vanguardia en materia de
                promoción y protección de los derechos de niños, niñas y
                adolescentes en el ecosistema de Internet.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
