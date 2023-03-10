import imgUs from "../../../assets/About/CC42AH4J2RDO3JQ34RN6JDKOKA.jpg";
import imgMission from "../../../assets/About/NuestraMision.png";
import imgVision from "../../../assets/About/NuestraVision.png";
import folder from "../../../assets/About/BsFolderCheck.png";
import volunteer from "../../../assets/About/MdPeopleAlt.png";
import followers from "../../../assets/About/IoShareSocialOutline.png";
import provincies from "../../../assets/About/FiMapPin.png";
import s from "./About.module.css";
// import banner from '../../../assets/18.png'
// import team from "../About/AboutPractice";
// import TeamCard from "../About/TeamCards/Card";
// import team from "../About/AboutPractice";
// import TeamCard from "../About/TeamCards/Card";

const About = () => {
  return (
    <div class="container-fluid" style={{ width: "85%" }}>
      {/* Baner about */}
      <div class="row" className={s.bannerContainer}>
        <div className={s.banner}>
          {/* <img scr={banner} alt='' className={s.img}/> */}
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
                width="520px"
                height="480px"
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
                  Grooming Argentina naci?? Institucionalmente en el a??o 2014 y
                  se convirti?? en la primera Organizaci??n global creada para
                  combatir el delito de ??grooming o child grooming??. Fue
                  originada con el prop??sito de trabajar fundamentalmente sobre
                  ejes basados en la prevenci??n y concientizaci??n en pos de la
                  erradicaci??n del grooming en Argentina y Am??rica Latina.
                  <br />
                  <br />
                  La ONG se encuentra conformada por un grupo multidisciplinario
                  de profesionales t??cnicos y voluntarios id??neos no t??cnicos,
                  destinado a tratar este flagelo que avanza de manera alarmante
                  con el advenimiento de los medios sociales de comunicaci??n y
                  las nuevas tecnolog??as. El eje central de la Instituci??n est??
                  orientado al fortalecimiento de las acciones diarias
                  tendientes a la prevenci??n as?? como tambi??n al acompa??amiento
                  y asistencia de las v??ctimas y sus familias.
                  <br />
                  <br />A su vez, cuenta con la novedosa app de denuncias ??GAPP??
                  gratuita y de alcance global, que permite denunciar el delito
                  con tan solo ??presionar un bot??n??. Grooming Argentina se
                  encuentra a la vanguardia en materia de promoci??n y protecci??n
                  de los derechos de ni??os, ni??as y adolescentes en el
                  ecosistema de Internet..
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
              <img
                class="img-fluid"
                className={s.image2}
                width="500px"
                height="300px"
                src={imgMission}
                alt="mission"
              />
            </div>
            <div class="col-sm-12 col-md-11 col-lg-8 col-xl-7 container-fluid">
              <div className={s.textContainer2}>
                <h4>Trabajamos para combatir el Grooming</h4>
                <p>
                  GROOMING ARGENTINA es una organizaci??n no gubernamental que
                  vela por la promoci??n, protecci??n y defensa de los derechos de
                  ni??os, ni??as y adolescentes en el Ecosistema de Internet. Nos
                  dedicamos ??ntegramente a ejecutar medidas del orden de la
                  promoci??n y prevenci??n relacionadas a evitar la vulneraci??n de
                  derechos en ni??os, ni??as y adolescentes a trav??s de las
                  distintas plataformas tecnol??gicas.
                  <br />
                  <br />
                  Las pol??ticas de nuestra Instituci??n est??n direccionadas y
                  orientadas a proteger el colectivo de ni??os, ni??as y
                  adolescentes as?? como tambi??n el de dinamizar y promover
                  acciones tendientes correspondientes a la formaci??n y
                  capacitaci??n de distintos actores del sistema pertenecientes
                  al mundo adulto.
                  <br />
                  <br />
                  Dichas pol??ticas son ejecutadas de un modo federal en todo el
                  territorio de la Rep??blica. A su vez, nos encontramos
                  ejecutando dichas pol??ticas en pa??ses de la regi??n.
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
              <img
                class="img-fluid"
                className={s.image3}
                width="500px"
                height="300px"
                src={imgVision}
                alt="vision"
              />
            </div>
            <div class="col-sm-12 col-md-11 col-lg-8 col-xl-7 container-fluid">
              <div className={s.textContainer2}>
                <h4
                  className={s.textContainerinfant}
                  style={{
                    textAlign: "center",
                    fontSize: "45px",
                    margin: "auto",
                  }}
                >
                  Velamos por los derechos de las infancias y adolescencias
                </h4>
                <p>
                  GROOMING ARGENTINA es una organizaci??n responsable y
                  comprometida caracterizada por la defensa de los derechos de
                  las infancias y las adolescencias.
                  <br />
                  <br />
                  Una organizaci??n social din??mica y participativa, de ??mbito de
                  actuaci??n tanto local como internacional, integrada por
                  personas calificadas e identificadas con la misi??n y valores
                  institucionales que nos representan, con capacidad de
                  adaptaci??n permanente al cambio y abierta a la coordinaci??n de
                  esfuerzos y recursos con otras organizaciones p??blicas y
                  privadas.
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
          width="660"
          height="415"
          src="https://www.youtube.com/embed/GsY1kb5LgHU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      {/*Values*/}
      <div class="container-fluid" className={s.videoContainer}>
        <h4 className={s.visionTitle}>
          Nuestros <span>valores</span>
        </h4>
        <div className={s.visionDiv}>
          <div class="row g-3">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h3>Amplio sentido de la sensibilidad</h3>
              <p>
                Frente a los acontecimientos que nos toca enfrentar, los cuales
                vulneran los derechos de los ni??os, ni??as y adolescentes.
              </p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h3>Excelencia</h3>
              <p>
                Nos esforzamos por llevar a cabo acciones de calidad, con fuerte
                sentido del compromiso y la responsabilidad, atentos a la
                particularidad de cada situaci??n compleja que nos toca atravesar
                en relaci??n al padecimiento que sufren las familias.
              </p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h3>Compromiso</h3>
              <p>
                Profesional y ??tico para el adecuado desempe??o de nuestra labor.
              </p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h3>Solidaridad</h3>
              <p>
                Acompa??amos a las v??ctimas y sus familias en los procesos
                penales y asistencia psicol??gica.
              </p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h3>Exigencia</h3>
              <p>
                Somos exigentes con nosotros mismos y con nuestros
                colaboradores. Establecemos objetivos ambiciosos y estamos
                comprometidos permanentemente en la mejora de los proyectos que
                encauzamos
              </p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h3>Cooperaci??n</h3>
              <p>
                Trabajamos junto a organizaciones p??blicas, privadas y
                organismos de cooperaci??n internacional para aunar esfuerzos en
                el logro de los objetivos.
              </p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h3>Convicci??n</h3>
              <p>
                Trabajamos junto a organizaciones p??blicas, privadas y
                organismos de cooperaci??n internacional para aunar esfuerzos en
                el logro de los objetivos.
              </p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h3>Voluntariado Social</h3>
              <p>
                Contamos con el cuerpo de voluntarios/as en todo el pa??s que
                aportan el recurso humano necesario para llevar a cabo las
                acciones que nuestra Instituci??n promueve en el territorio
                nacional.
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
              <h4>
                Nuestras <span>estad??sticas</span>
              </h4>
            </div>
          </div>
          <div className={s.stadistiContainer}>
            <div className={s.stadisticItem}>
              <img src={folder} alt="folder" />
              <h1 className={s.valueStadistic}>+ 100</h1>
              <h3>Proyectos cerrados</h3>
            </div>
            <div className={s.stadisticItem}>
              <img src={volunteer} alt="volunteer" />
              <h1 className={s.valueStadistic}>+ 800</h1>
              <h3>Voluntarios</h3>
            </div>
            <div className={s.stadisticItem}>
              <img src={followers} alt="followers" />
              <h1 className={s.valueStadistic}>+ 80000</h1>
              <h3>Seguidores</h3>
            </div>
            <div className={s.stadisticItem}>
              <img src={provincies} alt="provincies" />
              <h1 className={s.valueStadistic}>23</h1>
              <h3>Provincias</h3>
            </div>
          </div>
        </div>
      </div>
      {/*Team*/}
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
