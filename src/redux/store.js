import {createStore} from "redux";
import {ProductItemReducer} from "./ProductItemReducer";

export const store = createStore(ProductItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());