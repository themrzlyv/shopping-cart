import { Dispatch } from "redux";
import { CategoryDispatchType, GET_ALL_CATEGORIES } from "./categoryActionTypes";

export const getAllCategories = () => async(dispatch:Dispatch<CategoryDispatchType>) => {
    const res = await fetch(`https://fakestoreapi.com/products/categories`)
    const result = await res.json()
    dispatch({type:GET_ALL_CATEGORIES,payload:result})
}