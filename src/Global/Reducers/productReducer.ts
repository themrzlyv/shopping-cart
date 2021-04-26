import { GET_ALL_PRODUCTS, GET_PRODUCTS_FOR_CATEGORY, GET_SINGLE_PRODUCT, ProductDispatchType, SEARCH_PRODUCTS, SingleProductDataType } from "../Actions/ProductAction/productActionTypes";

interface Istate {
    products?:SingleProductDataType[];
    product?:SingleProductDataType;
}

const initialState:Istate = {}

export const productReducer = (state:Istate  = initialState,action:ProductDispatchType):Istate => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                products: action.payload
            }
        case GET_SINGLE_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case GET_PRODUCTS_FOR_CATEGORY:
            return {
                ...state,
                products: action.payload
            }
        case SEARCH_PRODUCTS:
            return {
                products: action.payload
            }
        default:
            return state;
    }
}