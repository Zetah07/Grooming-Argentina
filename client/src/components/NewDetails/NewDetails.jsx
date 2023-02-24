import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewByID } from '../../Redux/Actions';
import Button from 'react-bootstrap/Button';


const NewDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const newID = useSelector(state => state.newID);
  useEffect(() => {
    dispatch(getNewByID(id));
  }, [dispatch, id]);
  return (
    <div class="container">
      <div class="card" >
        <h2 class="card-title">{newID.title}</h2>
        <img src={newID.img} alt={newID.title} class="card-img-top" />
        <div class="card-body">
          <p class="card-subtitle mb-2 text-muted">Categoria: {newID.category}</p>
          <p class="card-subtitle mb-2 text-muted">Publicado: {newID.createdAt}</p>
          <p class="card-text">Descripción: {newID.description}</p>
          <p>Enlaces adicionales:</p><a href={newID.link} class="card-link fs-6">{newID.link}</a>
          <div class="card-body">
            <Button href="#" variant="primary">Compartir</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewDetails