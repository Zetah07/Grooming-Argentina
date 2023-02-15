import React from 'react'
import Pagination from "../Pages/Pagination/Pagination.jsx";
import newspaper from './NewsPractice.jsx';
import { useState } from 'react';
import NewCard from '../NewCard/NewCard';


const News = () => {

  const newsPerPage = 8;
  const pageNumberLimit = 5;
  const totalNews = newspaper.length;
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);

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


  return (<>
    <h1>Noticias</h1>
    <div>
      <div>
        {items.map(paper => {
          return <NewCard
            key={paper.id}
            id={paper.id}
            title={paper.title}
            image={paper.image}
            description={paper.description}
          />
        })}
      </div>
    </div >
    <Pagination totalNews={totalNews} firstHandler={firstHandler} prevHandler={prevHandler} nextHandler={nextHandler} lastHandler={lastHandler} pages={pages} newsPerPage={newsPerPage} currentPage={currentPage} pageNumberLimit={pageNumberLimit} maxPageNumberLimit={maxPageNumberLimit} minPageNumberLimit={minPageNumberLimit} />
  </>
  )
}

export default News