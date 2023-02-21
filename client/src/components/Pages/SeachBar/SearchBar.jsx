import React from "react";
// import { useDispatch } from "react-redux";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const SearchBar = () => {

    // const dispatch = useDispatch();
    const [search, setSearch] = useState({
        title: ""
    })
    const searchHandler = (event) => {
        setSearch({ title: event.target.value });
    }
    const submitHandler = () => {
        const title = search.title
        if (title.length > 0) {
            // dispatch(getNewsByTitle(title));
            console.log(title)
        }
    }
    const clearHandler = () => {
    }
    return (<Stack>
        <Form.Control id="search" onChange={searchHandler} value={search.title} className="me-auto" placeholder="Buscar..." />
        <Button variant="secondary" onClick={submitHandler} value={search.title}>Buscar</Button>
        <div className="vr" />
        <Button variant="outline-danger" onClick={clearHandler}>Limpiar</Button>
    </Stack>
    )
}

export default SearchBar