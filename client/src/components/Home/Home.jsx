import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import s from "./Home.module.css";
import BoxColor from "../Boxes/BoxColor/Boxes";
import BoxImage from "../Boxes/BoxImage/Boxes";
import {
  MdSportsTennis,
  MdBloodtype,
  MdCastForEducation,
  MdPsychology
} from "react-icons/md";
import { FaHandHoldingMedical, FaVirus, FaPeopleArrows, FaTiktok } from "react-icons/fa";
import { GiFallingBlob, GiPoliceBadge } from "react-icons/gi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { SiRoblox } from "react-icons/si";
import Cards from "../Card/Card";
import Row from "react-bootstrap/Row";
import axios from 'axios';
import NewCard from "../NewCardHome/NewCard";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";


const Home = () => {
  const [news, setNews] = useState();

  const getNews = ()=>{
    if(news!==undefined) return;
    axios.get(`/news?limit=3&page=1`)
        .then(res=>{
            const arr = res.data.docs;
            setNews(arr);
        });
  };

  useEffect(()=>{
    getNews();
  },[news]);

  return (
    <>
      <div className={s.container1} >
      <Carousel className={s.carousel}>
      {news?.map(paper=><Carousel.Item className={s.item}>
        <img
          className={s.caroImg}
          src={paper.img}
        />
        <Carousel.Caption>
          <Link style={{textDecoration: 'none', color: 'white'}} to={`/noticias/${paper._id}`} >
           <h3 className={s.caroTitle}>{paper.title}</h3>
            <p className={s.caroText}>{paper.description}</p> 
          </Link>
        </Carousel.Caption>
      </Carousel.Item>)}
    </Carousel>
      </div>
      <div className={s.divSocialMedia}>
        <a href="https://www.instagram.com/groomingargentina/?igshid=YmMyMTA2M2Y%3D/" target="_blank">
          <button style={{background: '#f09433',
            background: '-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
            background: '-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', 
            background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', 
            filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 )"}} className={s.socialMedia}>{<AiOutlineInstagram className={s.socialIcon} />}
          </button>
        </a>
        <a href="https://www.facebook.com/groomingargentina/" target="_blank">
          <button className={s.socialMedia}
            style={{backgroundColor: '#3b5998'}}
          >
            {<GrFacebookOption className={s.socialIcon} />}
          </button>
        </a>
        <a href="https://twitter.com/GroomingArg/" target="_blank">
          <button className={s.socialMedia}
            style={{backgroundColor: '#00acee'}}
          >
            {<AiOutlineTwitter className={s.socialIcon} />}
          </button>
        </a>
        <a href="https://www.tiktok.com/@groomingargentina" target="_blank">
          <button className={s.socialMedia}
            style={{backgroundColor: 'black'}}
          >
            {<FaTiktok className={s.socialIcon} />}
          </button>
        </a>
        {/* <a href="#" target="_blank"> */}
          <button className={s.socialMedia}
            style={{backgroundColor: 'black'}}
          >
            {<SiRoblox className={s.socialIcon} />}
          </button>
        {/* </a> */}
      </div>
      <div className={s.container2}>
        <div className={s.divHalf}>
          <h1 className={s.title}>Varias causas</h1>
          <p>
            En Argentina, el grooming es un problema que afecta a muchas empresas, especialmente aquellas que trabajan con niños y jóvenes. Existen varias causas que pueden llevar a una empresa a tomar medidas para prevenir y combatir el grooming.<br/>

            Una de las principales causas es la responsabilidad social corporativa. Las empresas tienen un deber moral y ético de proteger a los más vulnerables de la sociedad, y esto incluye a los niños y jóvenes.
          </p>
          <button className="button">Aprender más</button>
        </div>
        <div className={s.divHalf}>
          <div className={s.divBoxes}>
            <BoxColor
              name="Deportes"
              Icon1={MdSportsTennis}
              height="160"
              width="180"
            />
            <BoxColor
              name="Medicina"
              Icon1={FaHandHoldingMedical}
              height="160"
              width="180"
            />
            <BoxColor
              name="Sangre"
              Icon1={MdBloodtype}
              height="160"
              width="180"
            />
            <BoxColor
              name="Educación"
              Icon1={MdCastForEducation}
              height="160"
              width="180"
            />
            <BoxColor
              name="Desastres naturales"
              Icon1={GiFallingBlob}
              height="160"
              width="180"
            />
            <BoxColor
              name="Covid - 19"
              Icon1={FaVirus}
              height="160"
              width="180"
            />
          </div>
        </div>
      </div>
        <div className={s.container3}>
          <div>
            <h1 className={s.title}>
              Últimos eventos de <span>GROOMING ARGENTINA</span>
            </h1>
            <p>
              En los últimos años, el grooming ha sido un tema muy presente en Argentina, y han ocurrido varios eventos importantes relacionados con este tema.<br/>

              Uno de los eventos más significativos fue la sanción de la Ley de Grooming en 2013, que estableció como delito la acción de acosar o molestar a un menor de edad a través de medios electrónicos o tecnológicos. Esta ley fue un paso importante para combatir el grooming y proteger a los niños y jóvenes en Argentina.
            </p>
            <div className={s.divCards}>
              <Cards
                tittle="Registro a eventos"
                body="Puedes registrarte a eventos y apoyarnos de paso "
                imgUrl="https://images.pexels.com/photos/1212805/pexels-photo-1212805.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <Cards
                tittle="Donación mensual"
                body="Puedes apoyarnos con la cantidad que desees mensualmente. "
                imgUrl="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <Cards
                tittle="Donar ahora"
                body="Si no puedes comprometerte tan de lleno podrías colaborar justo ahora. "
                imgUrl="https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
            </div>
            <button className="button">Más causas</button>
          </div>
        <div className={s.container4}>
          <div>
            <Container>
              <h1 className={s.title}>Eventos</h1>
              <p>
                Realizamos eventos de manera presencial dando capacitaciones
                de como ayudar a combatir este flagelo dentro de nuestra sociedad, además también damos información sobre todo lo necesario para ser uno de nuestros voluntarios.
              </p>
            </Container>
          </div>
        </div>
      </div>
      <div className={s.container5}>
        <BoxImage src="https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <BoxImage src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <BoxColor
          name="Conferencias especializadas"
          Icon1={FaPeopleArrows}
          height="320"
          width="500"
        />
        <BoxColor
          name="Ayuda psicológica"
          Icon1={MdPsychology}
          height="320"
          width="500"
        />
        <BoxImage src="https://images.pexels.com/photos/3321791/pexels-photo-3321791.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <BoxImage src="https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <BoxImage src="https://images.pexels.com/photos/3321789/pexels-photo-3321789.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <BoxColor
          name="Denuncias"
          Icon1={GiPoliceBadge}
          height="320"
          width="500"
        />
        <BoxImage src="https://images.pexels.com/photos/3321797/pexels-photo-3321797.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      </div>
      <div className={s.container6}>
        <h1 className={s.title}>Instituciones que abalan nuestra diplomatura</h1>
        <img style={{maxWidth: '95%'}} src="data:image/png;base64,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" alt="" />
        <img style={{maxWidth: '95%'}} src="data:image/png;base64,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" alt="" />
        <img style={{maxWidth: '95%'}} src="data:image/png;base64,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" alt="" />
        <div style={{textAlign:"center",padding:"0"}}>
          <button className="button" >Especialización</button>
        </div>  
      </div>
      <div className={s.container7}>
        <h1 className={s.title}>Últimas noticias</h1>
        <Row>
            {news?.map(paper =><NewCard  
                  key={paper._id}
                  id={paper._id}
                  title={paper.title}
                  image={paper.img}
                  description={paper.description}
                  provinceOrLocation={paper.provinceOrLocation}
                  createdAt={paper.createdAt}
                  category={paper.category}
                />
            )}
        </Row>
      </div>
    </>
  );
};

export default Home;
