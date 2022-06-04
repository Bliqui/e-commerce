import {combineReducers, createStore} from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// @ts-ignore
import {ProductItemReducer} from "./ProductItemReducer.ts";
// @ts-ignore
import {CartItemReducer} from "./CartItemReducer.ts";

const rootReducerMain = combineReducers({
    product: ProductItemReducer,
    cart: CartItemReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducerMain)

export const store = createStore(persistedReducer);
export let persistor = persistStore(store);

