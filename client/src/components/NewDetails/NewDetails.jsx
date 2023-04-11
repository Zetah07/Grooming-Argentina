/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getNewByID } from '../../Redux/Actions';
import style from './NewDetails.module.css';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const NewDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const newID = useSelector((state) => state.newID);
  useEffect(() => {
    dispatch(getNewByID(id));
  }, [dispatch, id]);
  return (
    <div className={style.container}>
      <div>
        <h2 class={style.title}>{newID.title}</h2>
        <div className={style.img}>
          {newID.img ? (
            <img
              src={newID.img.url}
              alt={newID.title}
              class='card-img-top'
              style={{ width: '50%' }}
            />
          ) : null}
        </div>
        <div className={style.content}>
          <p className={style.text}>
            Categorias:{' '}
            {newID.category
              ? newID.category.map((cat) => {
                  return <span className={style.text}>|{cat}| </span>;
                })
              : null}
          </p>
          <p className={style.text}>Provincia: {newID.provinceOrLocation}</p>
          <p className={style.text}>
            Publicado:{' '}
            {new Date(newID.createdAt).toLocaleString('es-US', {
              timeZone: 'America/Argentina/Buenos_Aires',
            })}
          </p>
          <p className={style.textContent}>{newID.description}</p>
          <p>Enlaces adicionales:</p>
          <a href={newID.link} className={style.text}>
            {newID.link}
          </a>
          <hr />
          <div className={style.text}>
            <h5>Compartir en:</h5>
            <FacebookShareButton
              url={`http://localhost:3000/noticias/${newID._id}`}
              quote={newID.title}
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
            <LinkedinShareButton
              url={`http://localhost:3000/noticias/${newID._id}`}
              title={newID.title}
            >
              <LinkedinIcon size={40} round={true} />
            </LinkedinShareButton>
            <TelegramShareButton
              url={`http://localhost:3000/noticias/${newID._id}`}
              title={newID.title}
            >
              <TelegramIcon size={40} round={true} />
            </TelegramShareButton>
            <TwitterShareButton
              url={`http://localhost:3000/noticias/${newID._id}`}
              title={newID.title}
            >
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton
              url={`http://localhost:3000/noticias/${newID._id}`}
              title={newID.title}
            >
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDetails;
