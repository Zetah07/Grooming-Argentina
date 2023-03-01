import React from "react";
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { getBlogsSortByDate } from "../../../Redux/Actions";
import { useLocation } from "react-router-dom";

const SortByDate = () => {
    const dispatch = useDispatch();
    const usl = useLocation().pathname;
    const selectHandler = (event) => {
        const value = event.target.value;
        if (value.length > 0) {
            // if (usl === "/noticias") {
            //     dispatch(getNewsByTitle(title));
            // }
            if (usl === "/blog") {
                dispatch(getBlogsSortByDate(value));
            }
        }
    }
    return (<>
        <div className="vr" />
        <h5 className="card-title">Ordenar</h5>
        <div className="vr" />
        <Form.Select aria-label="Default select example" onChange={selectHandler}>
            <option disabled selected>Seleccione el orden</option>
            <option value="newest">Más reciente</option>
            <option value="oldest">Más antiguo</option>
        </Form.Select>
    </>
    )
}

export default SortByDate;