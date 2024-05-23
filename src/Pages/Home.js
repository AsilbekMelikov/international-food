import React, {useEffect, useState} from 'react';
import {getAllCategories} from "../api";
import Loader from "../Components/Loader";
import MealsList from "../Components/MealsList";
import Search from "../Components/Search";

const Home = () =>  {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)

    const filterMeals = (category) => {
        getAllCategories().then(data => data.categories && setMeals(data.categories.map(item => {
            if (item.strCategory === category) {
                return meals.filter(item => item)
            }
        })))
    }

    useEffect(() => {
        getAllCategories().then(data => data.categories && setMeals(data.categories))
        setLoading(false)
    }, []);

    return (
        <>
            <Search filterMeals = {filterMeals} />
            {loading ? <Loader /> : <MealsList meals={meals} />}
        </>
    );
}

export default Home;