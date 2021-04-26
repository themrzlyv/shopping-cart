import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";


const rootReducer = combineReducers({
    products: productReducer,
    categories: categoryReducer,
    card: cardReducer
})

export default rootReducer