import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { getAllNews, /* getNewsByTitle */ /* getBlogByTitle */ getAllBlogs } from '../../../Redux/Actions/index.js';
import { useLocation } from "react-router-dom";
import FilterCategory from "../FilterCategory/FilterCategory.jsx";
import FilterProvince from "../FilterProvince/FilterProvince.jsx";
import SortByDate from "../SortByDate/SortByDate.jsx";

const SearchBar = () => {
    const dispatch = useDispatch();
    const usl = useLocation().pathname;
    const page = 1;
    const [perPage, setperPage] = useState(6);
    const [search, setSearch] = useState({
        title: ""
    })
    const searchHandler = (event) => {
        setSearch({ title: event.target.value });
    }
    const submitHandler = () => {
        const title = search.title
        if (title.length > 0) {
            if (usl === "/noticias") {
                dispatch(getAllNews(page, perPage, title));
            }
            else if (usl === "/blog") {
                dispatch(getAllBlogs(page, perPage, title));
            }
        }
    }

    const clearHandler = () => {
        if (usl === "/noticias") {
            setSearch({ title: "" });
            setperPage(6);
            dispatch(getAllNews(page, perPage));
        }
        else if (usl === "/blog") {
            setSearch({ title: "" });
            setperPage(5);
            dispatch(getAllBlogs(page, perPage));
        }
    }
    return (<Stack>
        <Form.Control id="search" onChange={searchHandler} value={search.title} className="me-auto" placeholder="Buscar..." />
        <Button variant="secondary" onClick={submitHandler} value={search.title}>Buscar</Button>
        <div className="vr" />
        <Button variant="outline-danger" onClick={clearHandler}>Limpiar</Button>
        <div className="vr" />
        {usl === "/blog" ? <SortByDate /> : null}
        {usl === "/noticias" ? <FilterCategory /> : null}
        {usl === "/noticias" ? <FilterProvince /> : null}
    </Stack>
    )
}

export default SearchBar