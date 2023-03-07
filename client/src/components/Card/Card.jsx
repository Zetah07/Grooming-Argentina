import Card from 'react-bootstrap/Card';
import React from 'react';
import s from './Card.module.css';
import { Link } from 'react-router-dom';

const Cards = ({ imgUrl, tittle, body }) => {
  return (
    <Card style={{ width: '400px' }}>
      <Card.Img className={s.img} variant="top" src={imgUrl} />
      <Card.Body>
        <Link style={{textDecoration: 'none', color: '#004b82'}} to='https://servicios.paypertic.com/formularios/comercios/1466'>
          <Card.Title className={s.title}>{tittle}</Card.Title>
        </Link>
        <Card.Text style={{ fontSize: "20px" }}>{body}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cards;