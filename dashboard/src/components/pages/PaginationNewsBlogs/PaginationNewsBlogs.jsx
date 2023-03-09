import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationNewsBlogs = ({
  totalPages,
  firstHandler,
  prevHandler,
  nextHandler,
  lastHandler,
  pages,
  itemsPerPage,
  currentPage,
  pageNumberLimit,
  maxPageNumberLimit,
  minPageNumberLimit,
}) => {
  const numOfPages = [];
  const firstPage = 0;
  let lastPage = 0;
  const amountOfPages = totalPages;
  for (let i = 0; i < amountOfPages; i++) {
    lastPage = i;
    numOfPages.push(i);
  }

  const pagesToShow = Math.min(totalPages, pageNumberLimit);

  const upperLimit = Math.min(
    currentPage + Math.floor(pagesToShow / 1.5),
    totalPages - 1
  );
  const lowerLimit = Math.max(upperLimit - pagesToShow + 1, 0);

  return (
    <Pagination>
      <Pagination.First
        onClick={() => firstHandler(firstPage)}
        active={currentPage === firstPage}
      />
      <Pagination.Prev
        onClick={prevHandler}
        active={currentPage === firstPage}
      />
      {numOfPages?.map((page) => {
        if (page >= lowerLimit && page <= upperLimit) {
          return (
            <Pagination.Item
              id={page}
              key={page}
              active={page === currentPage}
              onClick={() => pages(page)}
            >
              {page + 1}
            </Pagination.Item>
          );
        } else {
          return null;
        }
      })}
      <Pagination.Next
        onClick={nextHandler}
        active={currentPage === lastPage}
      />
      <Pagination.Last
        onClick={() => lastHandler(lastPage)}
        active={currentPage === lastPage}
      />
    </Pagination>
  );
};

export default PaginationNewsBlogs;
