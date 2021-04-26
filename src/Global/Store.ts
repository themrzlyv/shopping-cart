import {createStore , applyMiddleware , compose} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducers/rootReducer";

const middleware = [thunk];

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
)

export type RootState = ReturnType<typeof rootReducer>

export default store;