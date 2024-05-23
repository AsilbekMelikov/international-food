import MealsListItem from "./MealsListItem";

const MealsList = (props) => {
    const {meals = []} = props

    if (!meals) {
        return <h1>Nothing found</h1>
    }

    return (
        <div className='meal-lists'>
            {meals.map(mealsItem => <MealsListItem key={mealsItem.idCategory} {...mealsItem} />)}
        </div>
    )
}

export default MealsList
