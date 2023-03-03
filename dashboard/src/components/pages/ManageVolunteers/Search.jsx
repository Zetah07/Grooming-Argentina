import React from "react";
import { Form } from "react-bootstrap";

const SearchBar = ({ value, onChange }) => {
  return (
    <Form.Group controlId="search">
      <Form.Control
        type="text"
        placeholder="Buscar por nombre o apellido"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Group>
  );
};

export default SearchBar;
