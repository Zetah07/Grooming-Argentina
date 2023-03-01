/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Button from 'react-bootstrap/Button';
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

const NewCard = ({ id, image, title, createdAt, category, provinceOrLocation }) => {
    return (
        <div className="col-12 col-md-6 col-lg-6 ">
            <div className="card h-100" >
                <img src={image} alt={title} className="card-img-top h-50" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-subtitle mb-2 text-muted">Categoria: {category}</p>
                    <p className="card-subtitle mb-2 text-muted">Provincia: {provinceOrLocation}</p>
                    <p className="card-subtitle mb-2 text-muted">Publicado: {createdAt}</p>
                    <div className="card-body">
                        <FacebookShareButton url={`http://localhost:3000/noticias/${id}`} quote={title}>
                            <FacebookIcon size={40} round={true} />
                        </FacebookShareButton>
                        <LinkedinShareButton url={`http://localhost:3000/noticias/${id}`} title={title}>
                            <LinkedinIcon size={40} round={true} />
                        </LinkedinShareButton>
                        <TelegramShareButton url={`http://localhost:3000/noticias/${id}`} title={title}>
                            <TelegramIcon size={40} round={true} />
                        </TelegramShareButton>
                        <TwitterShareButton url={`http://localhost:3000/noticias/${id}`} title={title}>
                            <TwitterIcon size={40} round={true} />
                        </TwitterShareButton>
                        <WhatsappShareButton url={`http://localhost:3000/noticias/${id}`} title={title}>
                            <WhatsappIcon size={40} round={true} />
                        </WhatsappShareButton>
                        <Button href={`/noticias/${id}`} variant="primary">Leer más</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCard;