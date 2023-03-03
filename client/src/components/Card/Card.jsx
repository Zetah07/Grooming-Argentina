import Card from 'react-bootstrap/Card';
import React from 'react';
import s from './Card.module.css';

const Cards = ({ imgUrl, tittle, body }) => {
  return (
    <Card style={{ width: '400px' }}>
      <Card.Img className={s.img} variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title className={s.title}>{tittle}</Card.Title>
        <Card.Text style={{ fontSize: "20px" }}>{body}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cards;