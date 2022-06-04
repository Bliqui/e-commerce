import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
// @ts-ignore
import {store, persistor} from "./redux/store.ts";
import {Provider} from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainBody} from "./components/MainBody/MainBody";
import {ProductPage} from "./components/ProductPage/ProductPage";
import {ShoppingCart} from "./components/ShoppingCart/ShoppingCart";
import {PersistGate} from "redux-persist/integration/react";
import {Loader} from "./components/Loader/Loader";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={<Loader />} persistor={persistor}>
                <Routes>
                    <Route path={"/"} element={<App/>}>
                        <Route index element={<MainBody/>}/>
                        <Route path={"product/:id"} element={<ProductPage/>}/>
                        <Route path={"shoppingCart"} element={<ShoppingCart/>}/>
                    </Route>
                </Routes>
            </PersistGate>
        </Provider>
    </ BrowserRouter>
);