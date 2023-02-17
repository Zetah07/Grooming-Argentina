import React from 'react'

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
    <button type="button" class="btn btn-primary" onClick={() => firstHandler(firstPage)} >First</button>
    <button type="button" class="btn btn-primary" onClick={prevHandler} >Prev</button>
    {
      numOfPages?.map((page) => {
        if (page < maxPageNumberLimit && page >= minPageNumberLimit) {
          return <button type="button" class="btn btn-primary" id={page} key={page} onClick={() => pages(page)}>{page + 1}</button>
        } else {
          return null;
        }
      })
    }
    <button type="button" class="btn btn-primary" onClick={nextHandler} >Next</button>
    <button type="button" class="btn btn-primary" onClick={() => lastHandler(lastPage)}>Last</button>
  </div>)
}

export default Pagination