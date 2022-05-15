import {ifInCartAdd} from "../helpers/ifInCartAdd";
import {ifInCartRemove} from "../helpers/ifInCartRemove";

const initialState = {
    finalPrice: 0,
    cartItems: []
}

export const CartItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_CART_ITEM':
            return {...state, cartItems: state.cartItems.length === 0 ? [...state.cartItems, action.value] : ifInCartAdd(state.cartItems, action.value)}
        case 'ADD_CART_ITEM':
            return {...state, cartItems: ifInCartAdd(state.cartItems, action.value)}
        case 'REMOVE_CART_ITEM':
            return {...state, cartItems: ifInCartRemove(state.cartItems, action.value)}
        case 'ADD_TO_FINAL_PRICE':
            return {...state, finalPrice: state.finalPrice + action.value}
        case 'REMOVE_FROM_FINAL_PRICE':
            return {...state, finalPrice: state.finalPrice - action.value}
        default:
            return state
    }
};