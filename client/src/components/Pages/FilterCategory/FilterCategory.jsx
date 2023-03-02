import React from "react";
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { getNewsByCategory } from "../../../Redux/Actions";

const FilterCategory = () => {
    const dispatch = useDispatch();
    const selectHandler = (event) => {
        const value = event.target.value;
        if (value.length > 0) {
            dispatch(getNewsByCategory(value));
        }
    }
    return (<>
        <div className="vr" />
        <h5 className="card-title">Categoria</h5>
        <div className="vr" />
        <Form.Select aria-label="Default select example" onChange={selectHandler}>
            <option disabled selected>Seleccione una categoria</option>
            <option value="Convenio">Convenio</option>
            <option value="Destacadas">Destacadas</option>
            <option value="test">test</option>
            <option value="Efemérides">Efemérides</option>
        </Form.Select>
    </>)
}

export default FilterCategory;