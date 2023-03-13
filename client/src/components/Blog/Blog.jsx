/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs, resetFilter, resetPagination } from '../../Redux/Actions';
import PaginationComp from "../Pages/PaginationComp/PaginationComp.jsx";
import s from "./Blog.module.css";
import SearchBar from "../Pages/SeachBar/SearchBar.jsx";
import { BlogCard } from '../BlogCard/BlogCard';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const Blog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogs);
  const filter = useSelector((state) => state.filter);
  const pagination = useSelector((state) => state.pagination);
  const blogsPerPage = 6;
  const pageNumberLimit = 5;
  const firstPage = 1;
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState({ title: "", sort: "" })
  const [currentPage, setCurrentPage] = useState(0);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  if (blogs.docs && blogs.docs.length > 0 && items && items.length === 0) setItems([...blogs.docs]);

  useEffect(() => {
    dispatch(getAllBlogs(currentPage + 1, blogsPerPage, search.title, search.sort));
    dispatch(resetPagination());
  }, [dispatch, currentPage, blogsPerPage]);

  useEffect(() => {
    if (pagination === true) {
      setItems([...blogs.docs]);
      dispatch(resetPagination());
    }
  }, [dispatch, pagination, blogs.docs])

  useEffect(() => {
    if (filter === true) {
      setCurrentPage(0);
      setmaxPageNumberLimit(5);
      setminPageNumberLimit(0);
      setItems([...blogs.docs]);
      dispatch(resetFilter());
    }
  }, [dispatch, filter, blogs]);

  const firstHandler = (firstPage) => {
    setCurrentPage(firstPage);
    setminPageNumberLimit(0);
    setmaxPageNumberLimit(5);
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    setCurrentPage(prevPage);
    if (currentPage % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const nextHandler = () => {
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * blogs;
    if (firstIndex > blogs.totalDocs) return;
    setCurrentPage(nextPage);
    if (currentPage + 2 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const lastHandler = (lastPage) => {
    setCurrentPage(lastPage);
    setmaxPageNumberLimit(5 * Math.ceil(lastPage / 5));
    setminPageNumberLimit(5 * Math.floor(lastPage / 5));
  };

  const pages = (numberPage) => {
    setCurrentPage(numberPage);
  };

  const searchHandler = (event) => {
    setSearch({ title: event.target.value });
  }

  const submitHandler = () => {
    const title = search.title
    if (title.length > 0) {
      dispatch(getAllBlogs(firstPage, blogsPerPage, title));
    }
  }

  const clearHandler = () => {
    setSearch({ title: "", sort: "" });
    dispatch(getAllBlogs(firstPage, blogsPerPage));
  }

  const selectHandler = (event) => {
    search.sort = event.target.value;
    if (search.sort.length > 0) {
      dispatch(getAllBlogs(firstPage, blogsPerPage, search.title, search.sort));
    }
  }

  return (<>
    <div className={s.container1}>
      <span>Blogs</span>
    </div>
    <br />
    <div class="container">
      <section class="row pb-3">
        <article class="row g-3 col-12 col-md-12 col-lg-4 order-lg-1">
          <Stack>
            <Form.Control id="search" onChange={searchHandler} value={search.title} className="me-auto" placeholder="Buscar..." />
            <Button variant="secondary" onClick={submitHandler} value={search.title}>Buscar</Button>
            <div className="vr" />
            <Button variant="outline-danger" onClick={clearHandler}>Limpiar</Button>
            <div className="vr" />
            <div className="vr" />
            <h5 className="card-title">Ordenar</h5>
            <div className="vr" />
            <Form.Select aria-label="Default select example" onChange={selectHandler}>
              <option disabled selected>Seleccione el orden</option>
              <option value="newest">Más reciente</option>
              <option value="oldest">Más antiguo</option>
            </Form.Select>
          </Stack>
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
          totalItems={blogs.totalDocs}
          totalPages={blogs.totalPages}
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