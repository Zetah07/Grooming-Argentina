// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import imgUs from '../../../assets/About/CC42AH4J2RDO3JQ34RN6JDKOKA.jpg'
import imgMission from '../../../assets/About/NuestraMision.png'
import s from './About.module.css'

const About = () => {
  return (
    <>
      {/* Baner about */}
      <div className={s.banner}>
          <h1>Acerca de <span>nosotros</span></h1>
      </div>

      <div className={s.mainContainer}>
        <div className={s.container1}>
          <div className={s.imgContainer}>
            <img src={imgUs} alt="img_us" />
          </div>
          <div className={s.textContainer}>
              <div className={s.title}>
                <div className={s.globo}>
                  <h3>Acerca de grooming</h3>
                </div>
                <h4>Ayudar es nuestro <span>objetivo principal</span></h4>
              </div>
              <p text='end'>
              Es un gran placer para nosotros presentarles el Maatram Educational and 
              Charitable Trust. Somos un grupo de amigos cuyo ideal en la vida es ayudar 
              donde podamos, como podamos y siempre que podamos. Esta ayuda está enfocada 
              hacia los pobres y necesitados que conviven entre nosotros dentro de nuestra 
              sociedad y pretende lograr un cambio en su vida - una "ARGENTINA GROOMING"<br /><br />
              Esta es una organización dirigida por voluntarios que son profesionales sinceros y bien
               establecidos y que están interesados ​​​​en que cada donación llegue a los estudiantes necesitados
                y brillantes, sin los cuales, habrían perecido en la oscuridad del abismo social. <br /><br />
              Estamos extremadamente agradecidos por su amabilidad y la generosidad de su donación. Con su amable 
              cooperación y apoyo, estamos localizando a estudiantes brillantes y necesitados de las áreas rurales
               y haciendo arreglos para brindarles asistencia financiera para estudios superiores. Provee comida, 
               abrigo, vestido y asistencia médica junto con amor y afecto a las personas mayores.
              </p>
          </div>
        </div>
      </div>
      {/* Global mission*/}
      <div className={s.mainContainer}>
        <div className={s.container2}>
          <div className={s.textContainer2}>
            <h4>Trabajamos en todo el mundo para salvar vidas, vencer la pobreza y lograr la justicia social.</h4>
            <p>
            Nuestra misión es ayudar a los niños y adultos jóvenes desfavorecidos a escapar de un entorno de pobreza,
             vida en barrios marginales, analfabetismo e ignorancia, creando así oportunidades para su integración en 
             la sociedad en general.<br /><br /> El objetivo final de Maatram es proporcionar a todos sus participantes los conocimientos 
             y habilidades para una vida digna y sostenible. La visión final de Matram es hacer una contribución significativa
              hacia la eliminación de los barrios marginales urbanos y la pobreza rural.
            </p>
          </div>
          <div className={s.imgContainer2}>
            <img src={imgMission} alt="mission"/>
          </div>
        </div>
      </div>
      {/*Video*/}
      <div className={s.videoContainer}>
        <div className={s.videoDiv}>
          <h4>Aqui va un video re loco</h4>
        </div>
      </div>
    </>
  );
};

export default About;
