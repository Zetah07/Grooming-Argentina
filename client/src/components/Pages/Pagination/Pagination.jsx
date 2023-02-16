import React from 'react'
import Button from '@mui/material/Button';
import { ButtonGroup, Stack } from '@mui/material';

const Pagination = ({ totalNews, firstHandler, prevHandler, nextHandler, lastHandler, pages, newsPerPage, currentPage, pageNumberLimit, maxPageNumberLimit, minPageNumberLimit }) => {

  const numOfPages = [];
  const firstPage = 0;
  let lastPage = 0;
  const amountOfPages = Math.ceil(totalNews / newsPerPage);
  for (let i = 0; i < amountOfPages; i++) {
    lastPage = i;
    numOfPages.push(i);
  }

  return (<ButtonGroup variant='contained' size='small' color='secondary'>
    <Button onClick={() => firstHandler(firstPage)} >First</Button>
    <Button onClick={prevHandler} >Prev</Button>
    {
      numOfPages?.map((page) => {
        if (page < maxPageNumberLimit && page >= minPageNumberLimit) {
          return <Button id={page} key={page} onClick={() => pages(page)}>{page + 1}</Button>
        } else {
          return null;
        }
      })
    }
    <Button onClick={nextHandler} >Next</Button>
    <Button onClick={() => lastHandler(lastPage)}>Last</Button>
  </ButtonGroup>)
}

export default Pagination