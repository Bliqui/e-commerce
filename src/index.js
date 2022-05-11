import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainBody} from "./components/MainBody/MainBody";
import {ProductPage} from "./components/ProductPage/ProductPage";
import {ShoppingCart} from "./components/ShoppingCart/ShoppingCart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path={"/"} element={<App/>}>
                    <Route index element={<MainBody/>}/>
                    <Route path={"product/:id"} element={<ProductPage/>}/>
                    <Route path={"shoppingCart"} element={<ShoppingCart/>}/>
                </Route>
            </Routes>
        </Provider>
    </ BrowserRouter>
);