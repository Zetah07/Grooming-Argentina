import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs, resetFilter } from '../../Redux/Actions';
import PaginationComp from "../Pages/PaginationComp/PaginationComp.jsx";
import s from "./Blog.Module.css";
import SearchBar from "../Pages/SeachBar/SearchBar.jsx";
import Button from "react-bootstrap/Button";
import { BlogCard } from '../BlogCard/BlogCard';

const Blog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogs);
  const filter = useSelector(state => state.filter);
  const blogsPerPage = 10;
  const pageNumberLimit = 5;
  const totalBlogs = blogs.length;
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  if (blogs.length > 0 && items.length === 0) setItems([...blogs].splice(0, blogsPerPage));

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  useEffect(() => {
    if (filter === true) {
      setCurrentPage(0);
      setmaxPageNumberLimit(5);
      setminPageNumberLimit(0);
      setItems([...blogs].splice(0, blogsPerPage));
      dispatch(resetFilter());
    }
  }, [dispatch, filter, blogs]);

  const firstHandler = (firstPage) => {
    const firstIndex = firstPage * blogsPerPage;
    setItems([...blogs].splice(firstIndex, blogsPerPage));
    setCurrentPage(firstPage);
    setminPageNumberLimit(0);
    setmaxPageNumberLimit(5);
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    const firstIndex = prevPage * blogsPerPage;
    if (prevPage < 0) return;
    setItems([...blogs].splice(firstIndex, blogsPerPage));
    setCurrentPage(prevPage);
    if (currentPage % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const nextHandler = () => {
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * blogsPerPage;
    if (firstIndex > totalBlogs) return;
    setItems([...blogs].splice(firstIndex, blogsPerPage));
    setCurrentPage(nextPage);
    if (currentPage + 2 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const lastHandler = (lastPage) => {
    const firstIndex = lastPage * blogsPerPage;
    setItems([...blogs].splice(firstIndex, blogsPerPage));
    setCurrentPage(lastPage);
    setmaxPageNumberLimit(5 * Math.ceil(lastPage / 5));
    setminPageNumberLimit(5 * Math.floor(lastPage / 5));
  };

  const pages = (numberPage) => {
    const firstIndex = numberPage * blogsPerPage;
    setItems([...blogs].splice(firstIndex, blogsPerPage));
    setCurrentPage(numberPage);
  };

  return (<>
    <div className={s.container1}>
      <span>Blogs</span>
    </div>
    <br />
    <div class="container">
      <section class="row pb-3">
        <article class="row g-3 col-12 col-md-12 col-lg-4 order-lg-1">
          <SearchBar />
        </article>
        <article class="row g-3 col-12 col-md-12 col-lg-8 ">
          {items.map((blog) => {
            return (
              <BlogCard
                key={blog._id}
                id={blog._id}
                author={blog.author}
                title={blog.title}
                content={blog.content}
                createdAt={blog.createdAt}
              />
            );
          })}
        </article>
      </section>
      <div className="row offset-2">
        <PaginationComp
          totalItems={totalBlogs}
          firstHandler={firstHandler}
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          lastHandler={lastHandler}
          pages={pages}
          itemsPerPage={blogsPerPage}
          currentPage={currentPage}
          pageNumberLimit={pageNumberLimit}
          maxPageNumberLimit={maxPageNumberLimit}
          minPageNumberLimit={minPageNumberLimit}
        />
      </div>
    </div>
    <br />
  </>)
}

export default Blog