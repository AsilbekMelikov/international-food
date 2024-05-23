import FilterCategoryItem from "./filterCategoryItem";

const FilterCategory = (props) => {
    const {filterMeals = []} = props

    if (!filterMeals) {
        return <h1>Nothing found</h1>
    }

    return (
        <div className='meal-lists'>
            {filterMeals.map(mealsItem => <FilterCategoryItem key={mealsItem.idMeal} {...mealsItem} />)}
        </div>
    )
}

export default FilterCategory