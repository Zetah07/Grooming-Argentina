import React from "react";
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { getNewsByProvince } from "../../../Redux/Actions";

const FilterProvince = () => {
    const dispatch = useDispatch();
    const selectHandler = (event) => {
        const value = event.target.value;
        if (value.length > 0) {
            dispatch(getNewsByProvince(value));
        }
    }
    return (<>
        <div className="vr" />
        <h5 className="card-title">Provincia</h5>
        <div className="vr" />
        <Form.Select aria-label="Default select example" onChange={selectHandler}>
            <option disabled selected>Seleccione una provincia</option>
            <option value="Pais de las maravillas">Pais de las maravillas</option>
            <option value="Buenos Aires">Buenos Aires</option>
        </Form.Select>
    </>
    )
}

export default FilterProvince;