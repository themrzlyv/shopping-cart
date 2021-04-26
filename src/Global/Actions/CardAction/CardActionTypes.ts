import { SingleProductDataType } from "../ProductAction/productActionTypes";

export const ADD_TO_CARD = "ADD_TO_CARD"
export const DELETE_TO_CARD = "DELETE_TO_CARD"
export const SHOW_CART_ITEMS = "SHOW_CART_ITEMS"

export interface AddToCard {
    type: typeof ADD_TO_CARD;
    payload: SingleProductDataType
}

export interface DeleteToCard {
    type: typeof DELETE_TO_CARD;
    payload: number
}

export interface ShowCartItems {
    type: typeof SHOW_CART_ITEMS;
}

export type CardDispatchType = AddToCard | ShowCartItems | DeleteToCard