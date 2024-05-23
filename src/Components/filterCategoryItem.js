

import {Link} from "react-router-dom";


const FilterCategoryItem = (props) => {
    const {strMeal, strMealThumb, idMeal} = props

    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content card-content-filter">
                <span className="card-title activator"><b>{strMeal}</b><i
                    className="material-icons right">more_vert</i></span>
            </div>
            <div className='card-action'>
                <Link to={`/meal/${idMeal}`} className='btn'>Watch recipe</Link>
            </div>
        </div>
    )
}

export default FilterCategoryItem