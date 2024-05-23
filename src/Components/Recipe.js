import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMealsById} from "../api";
import ShowIngredient from "./ShowIngredient";


const Recipe = () => {
    const {id} = useParams()
    const {goBack} = useHistory()
    const [filterMeals, setFilterMeals] = useState([])
    const [isShowIngredients, setShowIngredients] = useState(false)

    useEffect(() => {
        getMealsById(id).then(data => data.meals && setFilterMeals(data.meals[0]))
    }, [id]);

    const showIngredients = () => {
        setShowIngredients(!isShowIngredients)
    }

    return (
        <>
            <button className='btn' onClick={goBack}>Go Back</button>
            <div className='recipe'>
                <img src={filterMeals.strMealThumb} alt={filterMeals.strMeal}/>
                <div className='recipe-info'>
                    <h5><b>Name:</b> {filterMeals.strMeal}</h5>
                    <h5><b>Category:</b> {filterMeals.strCategory}</h5>
                    <h5><b>Country:</b> {filterMeals.strArea}</h5>
                    <p><b>Instructions:</b> {filterMeals.strInstructions}</p>
                    <button className='btn' type='button' onClick={showIngredients} >See ingredients</button>
                    {isShowIngredients ? <ShowIngredient key={filterMeals.idMeal} filterMeals={filterMeals} /> : null}
                    {filterMeals.strYoutube ? (
                        <div className='row'>
                            <h3>Video Instruction</h3>
                            <iframe src={`https://www.youtube.com/embed/${filterMeals.strYoutube.slice(-11)}`} allowFullScreen/>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default Recipe