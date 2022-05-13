import './ShoppingCart.scss'
import {useSelector} from "react-redux";
import {CartItem} from "../CartItem/CartItem";
import {EmptyCart} from "../EmptyCart/EmptyCart";

export const ShoppingCart = () => {

    const {finalPrice, cartItems} = useSelector(state => state);

    if (cartItems.length === 0) {
        return (
            <EmptyCart/>
        )
    }
    return (
        <div className={'shoppingCart-body'}>
            <div className={'shoppingCart-wrapper'}>
                <div className={'sumPurchase'}>
                    <div className={'sumPurchase-total'}>Your bag total is ${finalPrice}</div>
                    <div className={'buyBtnWrapper'}>
                        <button className={'buyBtn'}>Check out</button>
                    </div>
                    {cartItems.map((e) => {
                        return <CartItem key={e.id}
                                         price={e.price}
                                         count={e.count}
                                         phoneId={e.id}
                                         phoneImage={e.phoneImage}
                                         name={e.name}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}