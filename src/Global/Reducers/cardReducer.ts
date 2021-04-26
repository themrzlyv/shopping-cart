import { ADD_TO_CARD, CardDispatchType, DELETE_TO_CARD, SHOW_CART_ITEMS } from '../Actions/CardAction/CardActionTypes';
import { SingleProductDataType } from './../Actions/ProductAction/productActionTypes';

interface Istate {
    favorites?:SingleProductDataType[]
}

const initialState:Istate = { favorites: [] }

export const cardReducer = (state:Istate = initialState, action:CardDispatchType):Istate => {
    switch (action.type) {
        case SHOW_CART_ITEMS:
            let products:SingleProductDataType[] = JSON.parse(localStorage.getItem("cartitem"))
            products === null ? products = [] : products
            return {
                ...state,
                favorites: products
            }
        case ADD_TO_CARD:
            let localmemory = [...state.favorites,action.payload]
            localStorage.setItem("cartitem",JSON.stringify(localmemory))
            return {
                ...state, 
                favorites: localmemory
            }
        case DELETE_TO_CARD:
            let cartlist:SingleProductDataType[] = JSON.parse(localStorage.getItem("cartitem"))
            cartlist = cartlist.filter(product => product.id !== action.payload)
            localStorage.setItem("cartitem",JSON.stringify(cartlist))
            return {
                ...state, 
                favorites: cartlist
            }
        
    
        default:
            return state
    }
}