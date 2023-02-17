import React from "react";
// import { useDispatch } from "react-redux";
import { useState } from "react";

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
    return (
        <div>
            <input id="search" type="search" placeholder="Buscar..." onChange={searchHandler} value={search.title} />
            <button type="submit" onClick={submitHandler} value={search.title}>Buscar</button>
        </div>
    )
}

export default SearchBar