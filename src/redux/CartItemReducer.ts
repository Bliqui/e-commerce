// @ts-ignore
import {ifInCartAdd} from "../helpers/ifInCartAdd.ts";
// @ts-ignore
import {ifInCartRemove} from "../helpers/ifInCartRemove.ts";

interface State {
    finalPrice: number,
    cartItems: {
        id: string
        name: string
        price: number
        phoneImage: string
        count: number
        description: string
    }[]
}

const initialState: State = {
    finalPrice: 0,
    cartItems: []
}

export const CartItemReducer = (state = initialState, action: {type: string, value: {price}}) => {
    switch (action.type) {
        case 'CREATE_CART_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.length === 0 ? [...state.cartItems, action.value] : ifInCartAdd(state.cartItems, action.value)
            }
        case 'ADD_CART_ITEM':
            return {...state, cartItems: ifInCartAdd(state.cartItems, action.value)}
        case 'REMOVE_CART_ITEM':
            return {...state, cartItems: ifInCartRemove(state.cartItems, action.value)}
        case 'ADD_TO_FINAL_PRICE':
            return {...state, finalPrice: state.finalPrice + action.value.price}
        case 'REMOVE_FROM_FINAL_PRICE':
            return {...state, finalPrice: state.finalPrice - action.value.price}
        default:
            return state
    }
};