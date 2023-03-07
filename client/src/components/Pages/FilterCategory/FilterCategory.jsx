import React from "react";
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { getNewsByCategory, getCategories } from "../../../Redux/Actions";
import { useEffect } from "react";

const FilterCategory = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch,]);

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
            {categories ? categories.map(cat => {
                return <option key={cat._id} value={cat.name}>{cat.name}</option>
            }) : null}
        </Form.Select>
    </>)
}

export default FilterCategory;