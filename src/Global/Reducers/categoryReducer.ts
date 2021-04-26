import { CategoryDispatchType, GET_ALL_CATEGORIES } from "../Actions/CategoryAction/categoryActionTypes"

interface Istate {
    categories?:string[]
}

const initialState:Istate = {}

export const categoryReducer = (state:Istate = initialState, action:CategoryDispatchType):Istate => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return {
                categories: action.payload
            }
    
        default:
            return state;
    }
}