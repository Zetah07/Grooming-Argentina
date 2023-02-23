import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlogByID } from '../../Redux/Actions';
import Button from 'react-bootstrap/Button';

const NewDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const blogId = useSelector(state => state.blogId);
    useEffect(() => {
        dispatch(getBlogByID(id));
    }, [dispatch, id]);
    return (
        <div class="container">
            <div class="card" >
                <h2 class="card-title">{blogId.title}</h2>
                <div class="card-body">
                    <p class="card-subtitle mb-2 text-muted">Author: {blogId.author}</p>
                    <p class="card-subtitle mb-2 text-muted">Subtitulo: {blogId.subtitle}</p>
                    <p class="card-subtitle mb-2 text-muted">Publicado: {blogId.createdAt}</p>
                    <p class="card-text">Contenido: {blogId.content}</p>
                    <div class="card-body">
                        <Button href="#" variant="primary">Compartir</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewDetails