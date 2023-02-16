import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Input } from "@mui/material";
const SearchBar = ({ placeholder, onChange }) => {
    return (
        <div>
            <Input
                placeholder={placeholder}
                onChange={onChange}
            />
            <IconButton>
                <SearchIcon color="primary" />
            </IconButton>
        </div>
    )
}

export default SearchBar