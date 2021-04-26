import { Dispatch } from "redux";
import { GET_ALL_PRODUCTS, GET_PRODUCTS_FOR_CATEGORY, GET_SINGLE_PRODUCT, ProductDispatchType, SEARCH_PRODUCTS, SingleProductDataType } from "./productActionTypes";

export const getAllProducts = () => async(dispatch:Dispatch<ProductDispatchType>) => {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const result = await res.json()
    dispatch({type:GET_ALL_PRODUCTS,payload: result})
}

export const getSingleProduct = (id:unknown) => async(dispatch:Dispatch<ProductDispatchType>) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const result = await res.json()
    dispatch({type:GET_SINGLE_PRODUCT,payload: result})
}

export const getProductsForCategory = (category:string | undefined) => async(dispatch:Dispatch<ProductDispatchType>) => {
    let url = `https://fakestoreapi.com/products`
    category === undefined ? url : url += `/category/${category}`
    const res = await fetch(url)
    const result = await res.json()
    dispatch({type:GET_PRODUCTS_FOR_CATEGORY,payload: result})
}

export const searchProducts = (name:string) => async(dispatch:Dispatch<ProductDispatchType>) => {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data:SingleProductDataType[] = await res.json()
    const result = data.filter((product:SingleProductDataType) => product.title.toLowerCase().includes(name))
    dispatch({type:SEARCH_PRODUCTS,payload: result})
}