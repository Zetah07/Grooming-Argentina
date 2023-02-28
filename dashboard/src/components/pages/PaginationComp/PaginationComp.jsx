import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const PaginationComp = ({ totalItems, firstHandler, prevHandler, nextHandler, lastHandler, pages, itemsPerPage, currentPage, pageNumberLimit, maxPageNumberLimit, minPageNumberLimit }) => {

  const numOfPages = [];
  const firstPage = 0;
  let lastPage = 0;
  const amountOfPages = Math.ceil(totalItems / itemsPerPage);
  for (let i = 0; i < amountOfPages; i++) {
    lastPage = i;
    numOfPages.push(i);
  }

  return (<Pagination>
    <Pagination.First onClick={() => firstHandler(firstPage)} active={currentPage === firstPage} />
    <Pagination.Prev onClick={prevHandler} active={currentPage === firstPage} />
    <Pagination.Ellipsis />
    {
      numOfPages?.map((page) => {
        if (page < maxPageNumberLimit && page >= minPageNumberLimit) {
          return <Pagination.Item id={page} key={page} active={page === currentPage} onClick={() => pages(page)}>{page + 1}</Pagination.Item>
        } else {
          return null;
        }
      })
    }
    <Pagination.Ellipsis />
    <Pagination.Next onClick={nextHandler} active={currentPage === lastPage} />
    <Pagination.Last onClick={() => lastHandler(lastPage)} active={currentPage === lastPage} />
  </Pagination >)
}

export default PaginationComp