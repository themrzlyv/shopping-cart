import { SingleProductDataType } from './../ProductAction/productActionTypes';
import { Dispatch } from "redux";
import { ADD_TO_CARD, CardDispatchType, DELETE_TO_CARD, SHOW_CART_ITEMS } from "./CardActionTypes";

export const addToCard = (product:SingleProductDataType) => async(dispatch:Dispatch<CardDispatchType>) => {
    dispatch({type:ADD_TO_CARD, payload: product})
}

export const deleteToCard = (id:number) => async(dispatch:Dispatch<CardDispatchType>) => {
    dispatch({type:DELETE_TO_CARD, payload: id})
}

export const showCartItems = () => async(dispatch:Dispatch<CardDispatchType>) => {
    dispatch({type:SHOW_CART_ITEMS})
}