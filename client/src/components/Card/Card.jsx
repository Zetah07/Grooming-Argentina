import Card from 'react-bootstrap/Card';
import React from 'react';

const Cards = ({ imgUrl, tittle, body }) => {
  return (
    <Card style={{ width: '400px' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{tittle}</Card.Title>
        <Card.Text style={{ fontSize: "20px" }}>{body}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cards;