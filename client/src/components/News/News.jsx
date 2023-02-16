import React from 'react'
import Pagination from "../Pages/Pagination/Pagination.jsx";
// import newspaper from './NewsPractice.jsx';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import NewCard from '../NewCard/NewCard';
import { Grid } from '@mui/material';
import SearchBar from '../Pages/SeachBar/SearchBar.jsx';
import { getAllNews } from '../../Redux/Actions/index.js';

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

  console.log(newspaper)

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

  const handleChange = (event) => {
    console.log(event);
  }

  return (<>
    <Grid container spacing={3}>
      <Grid item xs={5} md={5} lg={5}>
        <SearchBar maxWidth="345"
          placeholder="Buscar..."
          onChange={(event) => { handleChange(event.target.value) }} />
      </Grid>
      {items.map(paper => {
        return <NewCard
          key={paper.id}
          id={paper.id}
          title={paper.title}
          image={paper.image}
          date={paper.date}
          categories={paper.categories}
        />
      })}
    </Grid>
    <Pagination totalNews={totalNews} firstHandler={firstHandler} prevHandler={prevHandler} nextHandler={nextHandler} lastHandler={lastHandler} pages={pages} newsPerPage={newsPerPage} currentPage={currentPage} pageNumberLimit={pageNumberLimit} maxPageNumberLimit={maxPageNumberLimit} minPageNumberLimit={minPageNumberLimit} />
  </>)
}

export default News