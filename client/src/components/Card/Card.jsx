import Card from 'react-bootstrap/Card';
import React from 'react';
import s from './Card.module.css';
import { Link } from 'react-router-dom';

const Cards = ({ imgUrl, tittle, body }) => {
  return (
    <>
      <Link
        style={{ textDecoration: 'none', color: '#004b82' }}
        to='https://servicios.paypertic.com/formularios/comercios/1466'
        target='_blank'
        rel='noreferrer'
      >
        <Card style={{ width: '375px', height: '450px' }}>
          <Card.Img className={s.img} variant='top' src={imgUrl} />
          <Card.Body>
            <Card.Title className={s.title} style={{ fontSize: '35px' }}>
              {tittle}
            </Card.Title>
            <Card.Text style={{ fontSize: '20px', textAlign: 'left' }}>
              {body}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default Cards;
