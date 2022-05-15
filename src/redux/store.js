import {combineReducers, createStore} from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {ProductItemReducer} from "./ProductItemReducer";
import {CartItemReducer} from "./CartItemReducer";

const rootReducerMain = combineReducers({
    product: ProductItemReducer,
    cart: CartItemReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducerMain)

export const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export let persistor = persistStore(store);

