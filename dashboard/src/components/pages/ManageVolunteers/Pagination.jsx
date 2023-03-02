import React from "react";
import { Pagination } from "react-bootstrap";

const Paginations = ({ page, pageCount, handlePageChange }) => {
  const range = 2;

  const renderPageItems = () => {
    let items = [];

    items.push(
      <Pagination.Item
        key={0}
        active={0 === page}
        onClick={() => handlePageChange(0)}
      >
        1
      </Pagination.Item>
    );

    for (
      let i = Math.max(1, page - range);
      i <= Math.min(pageCount - 2, page + range);
      i++
    ) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === page}
          onClick={() => handlePageChange(i)}
        >
          {i + 1}
        </Pagination.Item>
      );
    }

    if (pageCount > 1) {
      items.push(
        <Pagination.Item
          key={pageCount - 1}
          active={pageCount - 1 === page}
          onClick={() => handlePageChange(pageCount - 1)}
        >
          {pageCount}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <Pagination>
      <Pagination.First
        onClick={() => handlePageChange(0)}
        disabled={page === 0}
      />
      <Pagination.Prev
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 0}
      />
      {renderPageItems()}
      <Pagination.Next
        onClick={() => handlePageChange(page + 1)}
        disabled={page === pageCount - 1}
      />
      <Pagination.Last
        onClick={() => handlePageChange(pageCount - 1)}
        disabled={page === pageCount - 1}
      />
    </Pagination>
  );
};

export default Paginations;
