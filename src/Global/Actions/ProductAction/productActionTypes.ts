export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const GET_SINGLE_PRODUCT = "GET_SINGLE_PRODUCT"
export const GET_PRODUCTS_FOR_CATEGORY = "GET_PRODUCTS_FOR_CATEGORY"
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS"

export type SingleProductDataType = {
    id:number;
    title:string;
    price:number;
    category:string;
    description:string;
    image:string;
}

export interface GetAllProducts {
    type: typeof GET_ALL_PRODUCTS;
    payload: SingleProductDataType[]
}

export interface GetSingleProduct {
    type: typeof GET_SINGLE_PRODUCT;
    payload: SingleProductDataType
}

export interface GetProductsForCategory {
    type: typeof GET_PRODUCTS_FOR_CATEGORY;
    payload: SingleProductDataType[]
}

export interface SearchProducts {
    type: typeof SEARCH_PRODUCTS;
    payload: SingleProductDataType[]
}

export type ProductDispatchType = GetAllProducts | GetSingleProduct | GetProductsForCategory | SearchProducts