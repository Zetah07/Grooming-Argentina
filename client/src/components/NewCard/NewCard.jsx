/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Button from 'react-bootstrap/Button';

const NewCard = ({ id, image, title, createdAt, category }) => {
    return (
        <div class="col-12 col-md-6 col-lg-6 ">
            <div class="card h-100" >
                <img src={image} alt={title} class="card-img-top h-50" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-subtitle mb-2 text-muted">Categoria: {category}</p>
                    <p class="card-subtitle mb-2 text-muted">Publicado: {createdAt}</p>
                    <div class="card-body">
                        <Button href="#" variant="primary">Compartir</Button>
                        <Button href={`/noticias/${id}`} variant="primary">Leer más</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCard;