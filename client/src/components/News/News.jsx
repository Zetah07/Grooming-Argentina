import React from "react";
import PaginationComp from "../Pages/PaginationComp/PaginationComp.jsx";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewCard from "../NewCard/NewCard";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
// import SearchBar from "../Pages/SeachBar/SearchBar.jsx";
import { getAllNews, resetFilter, resetPagination, getCategories } from "../../Redux/Actions/index.js";
import s from "./News.module.css";

const News = () => {
  const dispatch = useDispatch();
  const newspaper = useSelector((state) => state.news);
  const filter = useSelector((state) => state.filter);
  const pagination = useSelector((state) => state.pagination);
  const categories = useSelector((state) => state.categories);
  const newsPerPage = 6;
  const pageNumberLimit = 5;
  const firstPage = 1;
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState({ title: "", category: "", province: "" });
  const [currentPage, setCurrentPage] = useState(0);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  if (newspaper.docs && newspaper.docs.length > 0 && items && items.length === 0) setItems([...newspaper.docs]);

  useEffect(() => {
    dispatch(getAllNews(currentPage + 1, newsPerPage, search.title, search.category, search.province));
    dispatch(getCategories());
    dispatch(resetPagination());
  }, [dispatch, currentPage, newsPerPage]);

  useEffect(() => {
    if (pagination === true) {
      setItems([...newspaper.docs]);
      dispatch(resetPagination());
    }
  }, [dispatch, pagination, newspaper.docs])

  useEffect(() => {
    if (filter === true) {
      setCurrentPage(0);
      setmaxPageNumberLimit(5);
      setminPageNumberLimit(0);
      setItems([...newspaper.docs]);
      resetFilter();
    }
  }, [dispatch, filter, newspaper]);

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
    const firstIndex = nextPage * newsPerPage;
    if (firstIndex > newspaper.totalDocs) return;
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
    const title = search.title;
    if (title.length > 0) {
      dispatch(getAllNews(firstPage, newsPerPage, title));
    }
  }

  const clearHandler = () => {
    setSearch({ title: "", category: "", province: "" });
    dispatch(getAllNews(firstPage, newsPerPage));
  }

  const selectHandler = (event) => {
    search.category = event.target.value;
    if (search.category.length > 0) {
      dispatch(getAllNews(firstPage, newsPerPage, search.title, search.category, search.province));
    }
  }

  const selectHandlerProvince = (event) => {
    search.province = event.target.value;
    if (search.province.length > 0) {
      dispatch(getAllNews(firstPage, newsPerPage, search.title, search.category, search.province));
    }
  }

  return (
    <>
      <div className={s.container1}>
        <span>Noticias</span>
      </div>
      <br />
      <div className="container">
        <section className="row pb-3">
          <article className="row g-3 col-12 col-md-12 col-lg-4 order-lg-1">
            {/* <SearchBar /> */}
            <Stack>
              <Form.Control id="search" onChange={searchHandler} value={search.title} className="me-auto" placeholder="Buscar..." />
              <Button variant="secondary" onClick={submitHandler} value={search.title}>Buscar</Button>
              <div className="vr" />
              <Button variant="outline-danger" onClick={clearHandler}>Limpiar</Button>
              <div className="vr" />
              <div className="vr" />
              <h5 className="card-title">Categoria</h5>
              <div className="vr" />
              <Form.Select aria-label="Default select example" onChange={selectHandler}>
                <option disabled selected>Seleccione una categoria</option>
                {categories ? categories.map(cat => {
                  return <option key={cat._id} value={cat.name}>{cat.name}</option>
                }) : null}
              </Form.Select>
              <div className="vr" />
              <h5 className="card-title">Provincia</h5>
              <div className="vr" />
              <Form.Select aria-label="Default select example" onChange={selectHandlerProvince}>
                <option disabled selected>Seleccione una provincia</option>
                <option value="Pais de las maravillas">Pais de las maravillas</option>
                <option value="Buenos Aires">Buenos Aires</option>
              </Form.Select>
            </Stack>
          </article>
          <article className="row g-3 col-12 col-md-12 col-lg-8 ">
            {items.map((paper) => {
              return (
                <NewCard
                  key={paper._id}
                  id={paper._id}
                  title={paper.title}
                  image={paper.img}
                  description={paper.description}
                  provinceOrLocation={paper.provinceOrLocation}
                  createdAt={paper.createdAt}
                  category={paper.category}
                />
              );
            })}
          </article>
        </section>
        <div className="row offset-2">
          <PaginationComp
            totalItems={newspaper.totalDocs}
            totalPages={newspaper.totalPages}
            firstHandler={firstHandler}
            prevHandler={prevHandler}
            nextHandler={nextHandler}
            lastHandler={lastHandler}
            pages={pages}
            itemsPerPage={newsPerPage}
            currentPage={currentPage}
            pageNumberLimit={pageNumberLimit}
            maxPageNumberLimit={maxPageNumberLimit}
            minPageNumberLimit={minPageNumberLimit}
          />
        </div>
      </div>
      <br />
    </>
  );
};

export default News;
