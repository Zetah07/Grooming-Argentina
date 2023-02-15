import React from 'react'
import Button from '@mui/material/Button';

const Pagination = ({ totalNews, firstHandler, prevHandler, nextHandler, lastHandler, pages, newsPerPage, currentPage, pageNumberLimit, maxPageNumberLimit, minPageNumberLimit }) => {

  const numOfPages = [];
  const firstPage = 0;
  let lastPage = 0;
  const amountOfPages = Math.ceil(totalNews / newsPerPage);
  for (let i = 0; i < amountOfPages; i++) {
    lastPage = i;
    numOfPages.push(i);
  }

  return (<div>
    <Button size='small' onClick={() => firstHandler(firstPage)} >First</Button>
    <Button size='small' onClick={prevHandler} >Prev</Button>
    {
      numOfPages?.map((page) => {
        if (page < maxPageNumberLimit && page >= minPageNumberLimit) {
          return <Button size='small' id={page} key={page} onClick={() => pages(page)}>{page + 1}</Button>
        } else {
          return null;
        }
      })
    }
    <Button size='small' onClick={nextHandler} >Next</Button>
    <Button size='small' onClick={() => lastHandler(lastPage)} >Last</Button>
  </div>)
}

export default Pagination