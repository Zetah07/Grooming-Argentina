import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from 'react';
import s from './Home.module.css';
import BoxColor from '../Boxes/BoxColor/Boxes';
import BoxImage from '../Boxes/BoxImage/Boxes';
import { MdSecurity, MdVolunteerActivism, MdPsychology } from 'react-icons/md';
import { FaPeopleArrows, FaTiktok } from 'react-icons/fa';
import { GiPoliceBadge, GiRobberMask, GiTeacher } from 'react-icons/gi';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { SiRoblox } from 'react-icons/si';
import { TfiBag } from 'react-icons/tfi';
import Cards from '../Card/Card';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import NewCard from '../NewCardHome/NewCard';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Home = () => {
  const [news, setNews] = useState();
  const [featuredNews, setFeatured] = useState();

  const getNews = () => {
    if (news !== undefined) return;
    axios.get(`/news?limit=3&page=1`).then((res) => {
      const arr = res.data.docs;
      setNews(arr);
    });
  };
  const getFeaturedNews = () => {
    if (featuredNews !== undefined) return;
    axios.get(`/news?categoria=Noticia destacada`).then((res) => {
      const arr = res.data.docs;
      setFeatured(arr.slice(0, 4));
    });
  };

  useEffect(() => {
    getNews();
    getFeaturedNews();
  }, [news]);

  return (
    <>
      <div className={s.container1}>
        <Carousel className={s.carousel}>
          {featuredNews?.map((paper) => (
            <Carousel.Item key={paper._id} className={s.item}>
              <img className={s.caroImg} src={paper.img.url} alt='' />
              <Carousel.Caption>
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to={`/noticias/${paper._id}`}
                >
                  <h3 className={s.caroTitle}>{paper.title}</h3>
                  <p className={s.caroText}>{paper.description}</p>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className={s.divSocialMedia}>
        <a
          href='https://www.instagram.com/groomingargentina/?igshid=YmMyMTA2M2Y%3D/'
          target='_blank'
          rel='noreferrer'
        >
          <button
            style={{
              background: '#f09433',
              background:
                '-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              background:
                '-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
              background:
                'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
              filter:
                "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 )",
            }}
            className={s.socialMedia}
          >
            {<AiOutlineInstagram className={s.socialIcon} />}
          </button>
        </a>
        <a
          href='https://www.facebook.com/groomingargentina/'
          target='_blank'
          rel='noreferrer'
        >
          <button
            className={s.socialMedia}
            style={{ backgroundColor: '#3b5998' }}
          >
            {<GrFacebookOption className={s.socialIcon} />}
          </button>
        </a>
        <a
          href='https://twitter.com/GroomingArg/'
          target='_blank'
          rel='noreferrer'
        >
          <button
            className={s.socialMedia}
            style={{ backgroundColor: '#00acee' }}
          >
            {<AiOutlineTwitter className={s.socialIcon} />}
          </button>
        </a>
        <a
          href='https://www.tiktok.com/@groomingargentina'
          target='_blank'
          rel='noreferrer'
        >
          <button
            className={s.socialMedia}
            style={{ backgroundColor: 'black' }}
          >
            {<FaTiktok className={s.socialIcon} />}
          </button>
        </a>
      </div>
      <a
        href='https://servicios.paypertic.com/formularios/comercios/1466'
        target='_blank'
        rel='noreferrer'
      >
        <button className='button'>Donar ahora</button>
      </a>
      <br />

      <div className={s.container2}>
        <div className={s.divHalf}>
          <h1 className={s.title}>Varias causas</h1>
          <p>
            En Argentina, el grooming es un problema que afecta a muchas
            empresas, especialmente aquellas que trabajan con niños y jóvenes.
            Existen varias causas que pueden llevar a una empresa a tomar
            medidas para prevenir y combatir el grooming.
            <br />
            Una de las principales causas es la responsabilidad social
            corporativa. Las empresas tienen un deber moral y ético de proteger
            a los más vulnerables de la sociedad, y esto incluye a los niños y
            jóvenes.
          </p>
          <a href='/contactanos' target='_blank' rel='noreferrer'>
            <button className='button'>Aprender más</button>
          </a>
          <br />
          <br />
        </div>

        <div className={s.divHalf}>
          <div className={s.divBoxes}>
            <BoxColor
              name='Ciberseguridad'
              Icon1={MdSecurity}
              height='160'
              width='180'
            />
            <BoxColor
              name='Criminalística'
              Icon1={GiRobberMask}
              height='160'
              width='180'
            />
            <BoxColor
              name='Apoyo psicológico'
              Icon1={MdPsychology}
              height='160'
              width='180'
            />
            <BoxColor
              name='Concientización'
              Icon1={GiTeacher}
              height='160'
              width='180'
            />
            <BoxColor
              name='Asistencia legal'
              Icon1={TfiBag}
              height='160'
              width='180'
            />
            <BoxColor
              name='Voluntariado'
              Icon1={MdVolunteerActivism}
              height='160'
              width='180'
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
            En los últimos años, el grooming ha sido un tema muy presente en
            Argentina, y han ocurrido varios eventos importantes relacionados
            con este tema.
            <br />
            Uno de los eventos más significativos fue la sanción de la Ley de
            Grooming en 2013, que estableció como delito la acción de acosar o
            molestar a un menor de edad a través de medios electrónicos o
            tecnológicos. Esta ley fue un paso importante para combatir el
            grooming y proteger a los niños y jóvenes en Argentina.
          </p>
          <div className={s.divCards}>
            <Cards
              tittle='Registro a eventos'
              body='Puedes registrarte a eventos y apoyarnos de paso '
              imgUrl='https://images.pexels.com/photos/1212805/pexels-photo-1212805.jpeg?auto=compress&cs=tinysrgb&w=1600'
            />
            <Cards
              tittle='Donación mensual'
              body='Puedes apoyarnos con la cantidad que desees mensualmente. '
              imgUrl='https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&w=1600'
            />
            <Cards
              tittle='Donar ahora'
              body='Si no puedes comprometerte tan de lleno podrías colaborar justo ahora. '
              imgUrl='https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=1600'
            />
          </div>
        </div>
        <div className={s.container4}>
          <div>
            <Container>
              <h1 className={s.title}>Eventos</h1>
              <p>
                Realizamos eventos de manera presencial dando capacitaciones de
                como ayudar a combatir este flagelo dentro de nuestra sociedad,
                además también damos información sobre todo lo necesario para
                ser uno de nuestros voluntarios.
              </p>
            </Container>
          </div>
        </div>
      </div>
      <div className={s.container5}>
        <BoxImage src='https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=1600' />
        <BoxImage src='https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600' />
        <BoxColor
          name='Conferencias especializadas'
          Icon1={FaPeopleArrows}
          height='320'
          width='500'
        />
        <BoxColor
          name='Ayuda psicológica'
          Icon1={MdPsychology}
          height='320'
          width='500'
        />
        <BoxImage src='https://images.pexels.com/photos/3321791/pexels-photo-3321791.jpeg?auto=compress&cs=tinysrgb&w=1600' />
        <BoxImage src='https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=1600' />
        <BoxImage src='https://images.pexels.com/photos/3321789/pexels-photo-3321789.jpeg?auto=compress&cs=tinysrgb&w=1600' />
        <BoxColor
          name='Denuncias'
          Icon1={GiPoliceBadge}
          height='320'
          width='500'
        />
        {/* <BoxImage src='https://images.pexels.com/photos/3321797/pexels-photo-3321797.jpeg?auto=compress&cs=tinysrgb&w=1600' /> */}
      </div>
      <div className={s.container6}>
        <h1 className={s.title}>
          Algunas de las instituciones que nos avalan:
        </h1>
        <br />
        <div className={s.uniLogos}>
          <img
            style={{ Width: '300px', maxHeight: '105px', margin: '20px' }}
            src='data:image/png;base64,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9CqmK74SYBxwEgNnCli4cJHpNBufUWBqBMhj6W5l2jRhaiUcCLdCBZu/b5JwXSrfTuk4lrw4DomNV2MPB9G/dmAYyS9hymOk5ZnO0dhPhzjVGJXMo6jNz94ZynYZVb5JCLtFyjT6u9XGPN46NTaS1HR2T18bganjQV0cSijTqBjWGwltu0tjVI5pxvfY6JF41cht22Hod4GpO0b841ASU8szXyIwVkCSj1HMMPJGc2u9fUbRSnDK1B0DianRA41Nsti5gA0/saWYA4HItKujV5dblXDMbuH0zXBETNdPebKP/ouJ+dL4yPbSqu/gZk6ZkoBZa8PRAsJsgKam/RIl90y8jNBNdqltJ/S9MtNBch17TusxIU+O5VqzA8FhCxDnpjPErRhqS+Wy9yECfcey5qMXKHzcp48IPr68AEzG4UMI7ORtc3D07mOYJOgQmCxZawtqcqZqMqZmuobShnycdgOT30LHJODjqwPDdf5kwkDQglW59YqFZj/X8RMLuBjewcZwkI155dvxvYkeBdr6wMIU5B/B7hpJTJNyh5986/YI1l9f6cMFUV7bTboCT58sCyXjJDMHqg23n0eApnh5PWIieksas2DCynWOtyYWk7TXej7vOVPvnBgb3f05jft1Ou8Hic6U5pz/M5IVDHigaXf0rvNb9KN13/OZt9PzgKduBEsnnKeIiTV3cQ6s+A77914n91o3J+FtafL4gfteWpy9J9hdvtfLMO14g+TKaF+pM0b0wXm9uATO5D3taebnM33DnHOaau+FQz6dIjLO3ioXFabrOM40uWfLSm/vWtx/xbAENxZLcItpWaKM3JX058hdw8jcIrrIjZKlQ2cmMf1Pmjq+g+ysICVP/yQloT8o00alDks1p2VcFySxWFmMTPbJevo0k65WrVq1an2G/gccfAFWmOrBWQAAAABJRU5ErkJggg=='
            alt=''
          />
          <img
            style={{ Width: '300px', maxHeight: '105px', margin: '20px' }}
            src='data:image/png;base64,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'
            alt=''
          />
          <img
            style={{ Width: '300px', maxHeight: '105px', margin: '20px' }}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOiotJ6S8UAmQFvgJcTZ4TiO99OGdv_bv7A&usqp=CAU'
            alt=''
          />
        </div>
        <div style={{ textAlign: 'center', padding: '0' }}>
          <a href='/voluntariado' target='_blank' rel='noreferrer'>
            <button className='button'>Especialización</button>
          </a>
        </div>
      </div>
      <div className={s.container7}>
        <h1 className={s.title}>Últimas noticias:</h1>
        <br />
        <Row>
          {news &&
            news
              .slice(-3)
              .map((paper) => (
                <NewCard
                  key={paper._id}
                  id={paper._id}
                  title={paper.title}
                  image={paper.img.url}
                  description={paper.description}
                  provinceOrLocation={paper.provinceOrLocation}
                  createdAt={paper.createdAt}
                  category={paper.category}
                />
              ))}
        </Row>
      </div>
    </>
  );
};

export default Home;
