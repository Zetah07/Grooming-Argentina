import React from 'react'
import PaginationNews from "../Pages/PaginationNews/PaginationNews.jsx";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import NewCard from '../NewCard/NewCard';
import SearchBar from '../Pages/SeachBar/SearchBar.jsx';
import { getAllNews } from '../../Redux/Actions/index.js';
import s from "./News.module.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const News = () => {

  const dispatch = useDispatch();
  const newspaper = useSelector(state => state.news);
  const newsPerPage = 6;
  const pageNumberLimit = 5;
  const totalNews = newspaper.length;
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  if (newspaper.length > 0 && items.length === 0) setItems([...newspaper].splice(0, newsPerPage));

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  const firstHandler = (firstPage) => {
    const firstIndex = firstPage * newsPerPage;
    setItems([...newspaper].splice(firstIndex, newsPerPage));
    setCurrentPage(firstPage);
    setminPageNumberLimit(0);
    setmaxPageNumberLimit(5);
  }

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    const firstIndex = prevPage * newsPerPage;
    if (prevPage < 0) return;
    setItems([...newspaper].splice(firstIndex, newsPerPage));
    setCurrentPage(prevPage);
    if ((currentPage) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }

  const nextHandler = () => {
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * newsPerPage;
    if (firstIndex > totalNews) return;
    setItems([...newspaper].splice(firstIndex, newsPerPage));
    setCurrentPage(nextPage);
    if (currentPage + 2 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  const lastHandler = (lastPage) => {
    const firstIndex = lastPage * newsPerPage;
    setItems([...newspaper].splice(firstIndex, newsPerPage));
    setCurrentPage(lastPage);
    setmaxPageNumberLimit(5 * Math.ceil(lastPage / 5));
    setminPageNumberLimit(5 * Math.floor(lastPage / 5));
  }

  const pages = (numberPage) => {
    const firstIndex = numberPage * newsPerPage;
    setItems([...newspaper].splice(firstIndex, newsPerPage));
    setCurrentPage(numberPage);
  }

  // const handleChange = (event) => {
  //   console.log(event);
  // }
  
  return (<>
    <div className={s.container1}>
      <span>Noticias</span>
    </div>
    <br />
    <Container>
      <Row>
        <Col xs={12} md={8}>
          {items.map(paper => {
            return <NewCard
              key={paper._id}
              id={paper._id}
              title={paper.title}
              image={paper.img}
              description={paper.description}
              createdAt={paper.createdAt}
              category={paper.category}
            />
          })}</Col>
        <Col xs={6} md={4}><SearchBar /></Col>
      </Row>
    </Container>
    <Button variant="primary" href="/crearnoticia">Crear Noticia</Button>
    <PaginationNews totalNews={totalNews}
      firstHandler={firstHandler}
      prevHandler={prevHandler}
      nextHandler={nextHandler}
      lastHandler={lastHandler}
      pages={pages}
      newsPerPage={newsPerPage}
      currentPage={currentPage}
      pageNumberLimit={pageNumberLimit}
      maxPageNumberLimit={maxPageNumberLimit}
      minPageNumberLimit={minPageNumberLimit} />
  </>)
}

export default News