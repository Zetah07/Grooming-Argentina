import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewByID } from '../../Redux/Actions';
import Button from 'react-bootstrap/Button';


const NewDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id)
  const newID = useSelector(state => state.newID);
  useEffect(() => {
    dispatch(getNewByID(id));
  }, [dispatch, id]);
  return (
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card" >
        <img src={newID.img} alt={newID.title} class="card-img-top" />
        <div class="card-body">
          <h2 class="card-title">{newID.title}</h2>
          <p class="card-subtitle mb-2 text-muted">Categoria: {newID.category}</p>
          <p class="card-subtitle mb-2 text-muted">Publicado: {newID.createdAt}</p>
          <p class="card-text">Descripción: {newID.description}</p>
          <p class="card-text">Enlaces adicionales: {newID.Link}</p>
          <div class="card-body">
            <Button href="#" variant="primary">Compartir</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewDetails