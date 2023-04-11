import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from './BlogDetail.module.css';
import { getBlogByID } from '../../Redux/Actions';
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const NewDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const blogId = useSelector((state) => state.blogId);
  useEffect(() => {
    dispatch(getBlogByID(id));
  }, [dispatch, id]);
  return (
    <div className={style.container}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: '90vh',
        }}
      >
        <div
          className={style.container}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <h2 class={style.title}>{blogId.title}</h2>
          <p className={style.text}>Author: {blogId.author}</p>
          <p className={style.text}>Subtitulo: {blogId.subtitle}</p>
          <p className={style.text}>
            Publicado:{' '}
            {new Date(blogId.createdAt).toLocaleString('es-US', {
              timeZone: 'America/Argentina/Buenos_Aires',
            })}
          </p>
          <div className={style.content}>
            <p className={style.text}>{blogId.content}</p>
          </div>
          <br />
          <div className={style.shareContainer}>
            <h5 class='card-text'>Compartir en:</h5>
            <div className={style.buttons}>
              <FacebookShareButton
                url={`http://localhost:3000/blog/${blogId._id}`}
                quote={blogId.title}
              >
                <FacebookIcon size={40} round={true} />
              </FacebookShareButton>
              <LinkedinShareButton
                url={`http://localhost:3000/blog/${blogId._id}`}
                title={blogId.title}
              >
                <LinkedinIcon size={40} round={true} />
              </LinkedinShareButton>
              <TelegramShareButton
                url={`http://localhost:3000/blog/${blogId._id}`}
                title={blogId.title}
              >
                <TelegramIcon size={40} round={true} />
              </TelegramShareButton>
              <TwitterShareButton
                url={`http://localhost:3000/blog/${blogId._id}`}
                title={blogId.title}
              >
                <TwitterIcon size={40} round={true} />
              </TwitterShareButton>
              <WhatsappShareButton
                url={`http://localhost:3000/blog/${blogId._id}`}
                title={blogId.title}
              >
                <WhatsappIcon size={40} round={true} />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDetails;
