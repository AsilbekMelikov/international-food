import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getFilterCategory} from "../api";
import Loader from "../Components/Loader";
import FilterCategory from "../Components/filterCategory";

const Category = () =>  {
    const {name} = useParams()
    const [filterMeals, setFilterMeals] = useState([])

    useEffect(() => {
        getFilterCategory(name).then(data => data.meals && setFilterMeals(data.meals))
    }, [name]);

    return (
        <>
            {!filterMeals.length ? <Loader /> : <FilterCategory filterMeals = {filterMeals} />}
        </>
    );
}

export default Category;