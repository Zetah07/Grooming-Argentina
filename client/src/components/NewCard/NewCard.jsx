/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Button from 'react-bootstrap/Button';
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
} from "react-share";

const NewCard = ({ id, image, title, createdAt, category, provinceOrLocation }) => {
    return (
        <div class="col-12 col-md-6 col-lg-6 ">
            <div class="card h-100" >
                <img src={image} alt={title} class="card-img-top h-50" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-subtitle mb-2 text-muted">Categoria: {category}</p>
                    <p class="card-subtitle mb-2 text-muted">Provincia: {provinceOrLocation}</p>
                    <p class="card-subtitle mb-2 text-muted">Publicado: {createdAt}</p>
                    <div class="card-body">
                        <FacebookShareButton url={`http://localhost:3000/noticias/${id}`} quote={title}>
                            <FacebookIcon size={40} round={true} />
                        </FacebookShareButton>
                        {/* <FacebookMessengerShareButton url={`http://localhost:3000/noticias/${id}`}>
                            <FacebookMessengerIcon size={40} round={true} />
                        </FacebookMessengerShareButton> */}
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