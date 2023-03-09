/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewByID } from "../../Redux/Actions";
import style from "./NewDetails.module.css";
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
} from "react-share";

const NewDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const newID = useSelector((state) => state.newID);
  useEffect(() => {
    dispatch(getNewByID(id));
  }, [dispatch, id]);
  return (
    <div class={`container${style.container}`}>
      <div class="card">
        <h2 class={`card-title ${style.title}`}>{newID.title}</h2>
        <div className={style.img}>
          {newID.img ?
            <img
              src={newID.img.url}
              alt={newID.title}
              class="card-img-top"
              style={{ width: "50%" }}
            /> :
            null}
        </div>
        <div class="card-body">
          <p class="card-subtitle mb-2 text-muted" className={style.text}>
            Categorias: {newID.category ?
              newID.category.map(cat => {
                return <span class="card-subtitle mb-2 text-muted" className={style.text}>|{cat}| </span>
              })
              : null}
          </p>
          <p class="card-subtitle mb-2 text-muted" className={style.text}>
            Provincia: {newID.provinceOrLocation}
          </p>
          <p class="card-subtitle mb-2 text-muted" className={style.text}>
            Publicado: {newID.createdAt}
          </p>
          <p class="card-text" className={style.text}>Descripción: {newID.description}</p>
          <p>Enlaces adicionales:</p>
          <a href={newID.link} class="card-link fs-6" className={style.text}>
            {newID.link}
          </a>
          <div class="card-body" className={style.text}>
            <h5 class="card-text">Compartir en:</h5>
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
