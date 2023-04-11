import React from 'react';
import { Button } from 'react-bootstrap';
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
import style from './BlogCard.module.css';

export const BlogCard = ({ key, id, author, title, content, createdAt }) => {
  return (
    <div class='col-12 col-md-12 col-lg-12 '>
      <div class='card h-100' key={key}>
        <div class='card-body'>
          <h5 className={`card-title ${style.title}`}>{title}</h5>
          <p class='card-subtitle mb-2 text-muted'>Autor: {author}</p>
          <p class='card-subtitle mb-2 text-muted'>
            Publicado:{' '}
            {new Date(createdAt).toLocaleString('es-US', {
              timeZone: 'America/Argentina/Buenos_Aires',
            })}
          </p>
          <p class='card-text' className={style.information}>
            {content.length > 300 ? content.slice(0, 300) + '...' : content}
          </p>
          <div class='card-body'>
            <FacebookShareButton
              url={`http://localhost:3000/blog/${id}`}
              quote={title}
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
            <LinkedinShareButton
              url={`http://localhost:3000/blog/${id}`}
              title={title}
            >
              <LinkedinIcon size={40} round={true} />
            </LinkedinShareButton>
            <TelegramShareButton
              url={`http://localhost:3000/blog/${id}`}
              title={title}
            >
              <TelegramIcon size={40} round={true} />
            </TelegramShareButton>
            <TwitterShareButton
              url={`http://localhost:3000/blog/${id}`}
              title={title}
            >
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton
              url={`http://localhost:3000/blog/${id}`}
              title={title}
            >
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>
            <br />
            <Button
              href={`/blog/${id}`}
              variant='primary'
              style={{ marginTop: '15px' }}
            >
              Leer más
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
