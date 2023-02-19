import React from "react";
import Button from 'react-bootstrap/Button';

const NewCard = ({ image, title, description, createdAt, category }) => {
    return (
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card" >
                <img src={image} alt={title} class="card-img-top" />
                <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <p class="card-subtitle mb-2 text-muted">Categoria: {category}</p>
                    <p class="card-subtitle mb-2 text-muted">Publicado: {createdAt}</p>
                    <p class="card-text">{description}</p>
                    <div class="card-body">
                        <Button href="#" variant="primary">Compartir</Button>
                        <Button href="#" variant="primary">Leer más</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCard;