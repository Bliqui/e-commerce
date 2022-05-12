import {NavLink} from "react-router-dom";
import "./EmptyCart.scss"

export const EmptyCart = () => {
        return (
            <div className={'shoppingCart-body'}>
                <div className={'shoppingCart-wrapper__empty'}>
                    <div className={'shoppingCart-title'}>Your cart is empty.</div>
                    <NavLink to={'/'}>
                        <div className={'shoppingCart-subtitle'}>Continue shopping?</div>
                    </NavLink>
                </div>
            </div>
        )
    };