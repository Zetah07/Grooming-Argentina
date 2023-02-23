import React from 'react'
import { Button } from 'react-bootstrap'

export const BlogCard = ({ key, id, author, title, content, createdAt }) => {
    return (
        <div class="col-12 col-md-12 col-lg-12 ">
            <div class="card h-100" key={key} >
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-subtitle mb-2 text-muted">Categoria: {author}</p>
                    <p class="card-subtitle mb-2 text-muted">Publicado: {createdAt}</p>
                    <p class="card-text">{content}</p>
                    <div class="card-body">
                        <Button href="#" variant="primary">Compartir</Button>
                        <Button href={`/blog/${id}`} variant="primary">Leer más</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
