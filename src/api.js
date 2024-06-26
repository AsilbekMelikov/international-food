
import {API_URL} from "./config";

const getMealsById = async (mealId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId)
    return await response.json()
}

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php')
    return await response.json()
}

const getFilterCategory = async (categoryName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + categoryName)
    return await response.json()
}

export {getMealsById, getAllCategories, getFilterCategory}