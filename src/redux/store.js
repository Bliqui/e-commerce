import {combineReducers, createStore} from "redux";
import {ProductItemReducer} from "./ProductItemReducer";
import {CartItemReducer} from "./CartItemReducer"

const rootReducer = combineReducers({
    product: ProductItemReducer,
    cart: CartItemReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());