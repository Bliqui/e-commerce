import {useSelector} from "react-redux";
import {CartItem} from "../CartItem/CartItem";
import {EmptyCart} from "../EmptyCart/EmptyCart";

export const ShoppingCart = () => {

    const {finalPrice, phonesCount, cartItems} = useSelector(state => state);
    console.log(typeof cartItems)
    const [orderInfo] = cartItems;

    if (cartItems.length === 0) {
        return (
            <EmptyCart/>
        )
    }
    return (
        <CartItem finalPrice={finalPrice} orderInfo={orderInfo} phonesCount={phonesCount} />
    )
}