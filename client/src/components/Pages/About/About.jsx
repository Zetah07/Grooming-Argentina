import imgUs from "../../../assets/About/CC42AH4J2RDO3JQ34RN6JDKOKA.jpg";
import imgMission from "../../../assets/About/NuestraMision.png";
import imgVision from "../../../assets/About/NuestraVision.png";
import s from "./About.module.css";
import staticsimg from "../../../assets/About/StadisticContainer.png";
// import team from "../About/AboutPractice";
// import TeamCard from "../About/TeamCards/Card";

const About = () => {
  return (
    <div class="container-fluid">
      {/* Baner about */}
      <div class="row" className={s.bannerContainer}>
          <div className={s.banner}>
            <h1>
              Acerca de <span>nosotros</span>
            </h1>
          </div>
      </div>
      {/* mission*/}
      <div class="row" className={s.mainContainer0}>
        <div className={s.container1}>
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 container-fluid d-flex justify-content-end align-items-end p-3">
              <img
                class="img-fluid"
                className={s.image}
                width="500px"
                height="400px"
                src={imgUs}
                alt="img_us"
              />
            </div>
            <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8 container-fluid p-0">
              <div className={s.textContainer}>
                <div className={s.title}>
                  <div className={s.globo}>
                    <h3>Acerca de grooming</h3>
                  </div>
                  <h4>
                    Ayudar es nuestro <span>objetivo principal</span>
                  </h4>
                </div>
                <p text="end">
                  Grooming Argentina nació Institucionalmente en el año 2014 y 
                  se convirtió en la primera Organización global creada para 
                  combatir el delito de «grooming o child grooming». Fue originada 
                  con el propósito de trabajar fundamentalmente sobre ejes basados 
                  en la prevención y concientización en pos de la erradicación del 
                  grooming en Argentina y América Latina.
                  <br />
                  <br />
                  La ONG se encuentra conformada por un grupo multidisciplinario de 
                  profesionales técnicos y voluntarios idóneos no técnicos, destinado 
                  a tratar este flagelo que avanza de manera alarmante con el advenimiento 
                  de los medios sociales de comunicación y las nuevas tecnologías. El eje 
                  central de la Institución está orientado al fortalecimiento de las acciones 
                  diarias tendientes a la prevención así como también al acompañamiento y 
                  asistencia de las víctimas y sus familias. 
                  <br />
                  <br />
                  A su vez, cuenta con la novedosa app de denuncias «GAPP» gratuita y de alcance 
                  global, que permite denunciar el delito con tan solo «presionar un botón».
                  Grooming Argentina se encuentra a la vanguardia en materia de promoción y 
                  protección de los derechos de niños, niñas y adolescentes en el ecosistema de Internet..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mission*/}
      <div class="container-fluid" className={s.mainContainer0}>
        <div class="container-fluid" className={s.container2}>
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-5 container-fluid d-flex justify-content-end align-items-center p-3">
              <img class="img-fluid" className={s.image2} width="500px" height="300px" src={imgMission} alt="mission"/>
            </div>
            <div class="col-sm-12 col-md-11 col-lg-8 col-xl-7 container-fluid">
              <div className={s.textContainer2}>
                <h4>
                  Trabajamos para combatir el Grooming
                </h4>
                <p>
                  GROOMING ARGENTINA es una organización no gubernamental 
                  que vela por la promoción, protección y defensa de los 
                  derechos de niños, niñas y adolescentes en el Ecosistema 
                  de Internet. Nos dedicamos íntegramente a ejecutar medidas 
                  del orden de la promoción y prevención relacionadas a evitar 
                  la vulneración de derechos en niños, niñas y adolescentes a 
                  través de las distintas plataformas tecnológicas.
                  <br />
                  <br /> 
                  Las políticas de nuestra Institución están direccionadas y
                  orientadas a proteger el colectivo de niños, niñas y adolescentes 
                  así como también el de dinamizar y promover acciones tendientes 
                  correspondientes a la formación y capacitación de distintos actores 
                  del sistema pertenecientes al mundo adulto.
                  <br />
                  <br />
                  Dichas políticas son ejecutadas de un modo federal en
                  todo el territorio de la República. A su vez, nos encontramos ejecutando 
                  dichas políticas en países de la región.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vision*/}
      <div class="container-fluid" className={s.mainContainer0}>
        <div class="container-fluid" className={s.container2}>
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-4 col-xl-5 container-fluid d-flex justify-content-end align-items-center p-3">
                <img class="img-fluid" className={s.image3} width="500px" height="300px" src={imgVision} alt="vision" />
              </div>
              <div class="col-sm-12 col-md-11 col-lg-8 col-xl-7 container-fluid">
                <div className={s.textContainer2}>
                    <h4>Velamos por los derechos de las infancias y adolescencias</h4>
                    <p>
                    GROOMING ARGENTINA es una organización responsable y 
                    comprometida caracterizada por la defensa de los derechos 
                    de las infancias y las adolescencias.
                    <br />
                    <br />
                    Una organización social dinámica y participativa, de ámbito de 
                    actuación tanto local como internacional, integrada por personas 
                    calificadas e identificadas con la misión y valores institucionales 
                    que nos representan, con capacidad de adaptación permanente al cambio y abierta a
                    la coordinación de esfuerzos y recursos con otras organizaciones públicas y privadas.
                    </p>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/*Video*/}
      <div class="container-fluid" className={s.videoContainer}>
        <iframe
          className={s.video}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GsY1kb5LgHU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      {/*Values*/}
      <div class="container-fluid" className={s.videoContainer}>
        <h4 className={s.visionTitle}>Nuestros <span>valores</span></h4>
        <div className={s.visionDiv}>
          <div class="row g-3">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h3>Amplio sentido de la sensibilidad</h3>
                <p>
                  Frente a los acontecimientos que nos toca enfrentar, 
                  los cuales vulneran los derechos de los niños, niñas y adolescentes.
                </p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h3>Excelencia</h3>
                <p>
                  Nos esforzamos por llevar a cabo acciones de calidad,
                  con fuerte sentido del compromiso y la
                  responsabilidad, atentos a la particularidad de cada
                  situación compleja que nos toca atravesar en relación
                  al padecimiento que sufren las familias.
                </p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h3>Compromiso</h3>
                <p>
                  Profesional y ético para el adecuado desempeño de
                  nuestra labor.
                </p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h3>Solidaridad</h3>
                <p>
                  Acompañamos a las víctimas y sus familias en los
                  procesos penales y asistencia psicológica.
                </p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h3>Exigencia</h3>
                <p>
                  Somos exigentes con nosotros mismos y con nuestros colaboradores. 
                  Establecemos objetivos ambiciosos y estamos comprometidos permanentemente 
                  en la mejora de los proyectos que encauzamos
                </p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h3>Cooperación</h3>
                <p>
                  Trabajamos junto a organizaciones públicas, privadas y organismos de cooperación 
                  internacional para aunar esfuerzos en el logro de los objetivos.
                </p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h3>Convicción</h3>
                <p>
                  Trabajamos junto a organizaciones públicas, privadas y organismos de cooperación 
                  internacional para aunar esfuerzos en el logro de los objetivos.
                </p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h3>Voluntariado Social</h3>
                <p>
                  Contamos con el cuerpo de voluntarios/as en todo el país que aportan el recurso 
                  humano necesario para llevar a cabo las acciones que nuestra Institución promueve 
                  en el territorio nacional.
                </p>
              </div>
          </div>
        </div>
      </div>
      {/*Statistics*/}
      <div class="container-fluid" className={s.videoContainer}>
        <div class="row" className={s.statiticsDiv}>
          <div class="col">
            <div className={s.textContainer}>
              <div className={s.globo2}>
                <h3>Lo que hacemos</h3>
              </div>
              <h4>Nuestras <span>estadísticas</span></h4> 
            </div>
          </div>
          <div class="col">
            <img
              class="img-fluid"
              src={staticsimg}
              alt="statitics"
            />
          </div>
        </div>
      </div>
      {/*The team*/}
      {/* <div class="row" className={s.videoContainer}>
        <div class="container-fluid" className={s.teamContainer}>
          <div className={s.bodyContainer}>
            <div className={s.textContainer}>
              <div className={s.globo2}>
                <h3>Lo que hacemos</h3>
              </div>
              <h4>Conoce nuestro <span>equipo</span></h4> 
            </div>
            <div class="container">
              <div  class="row g-3">
                {team.map((member) => {
                  return (
                    <TeamCard
                      name={member.name}
                      avatar={member.avatar}
                      rol={member.rol}
                    />
                  );
                })}
              </div>
            </div>
            <div class="row" className={s.divButton}>
              <button className="button">
                <a className={s.link} style={{ textDecoration: 'none'}} href="/voluntariado">Ser voluntario</a>
              </button>
            </div>
          </div>
        </div> 
      </div>*/}
    </div>
  );
};

export default About;
