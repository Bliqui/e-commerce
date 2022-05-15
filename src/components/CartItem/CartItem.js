import "./CartItem.scss"
import {useDispatch} from "react-redux";
import {useState} from "react";

export const CartItem = ({phone}) => {
    const dispatch = useDispatch();
    const [disabled, setDisable] = useState(false);

    function addItem() {
        setDisable(true);
        return setTimeout(() => {
            dispatch({type: 'ADD_CART_ITEM', value: phone})
            dispatch({type: 'ADD_TO_FINAL_PRICE', value: phone.price})
            setDisable(false)
        }, 500)
    };

    function removeItem() {
            setDisable(true)
            setTimeout(() => {
                dispatch({type: 'REMOVE_CART_ITEM', value: phone})
                dispatch({type: 'REMOVE_FROM_FINAL_PRICE', value: phone.price})
                setDisable(false)
            }, 500)
    };

    return (
        <div className={'sumPurchaseBody'}>
            <div className={'sumPurchaseWrapper'}>
                <div className={'sumPurchaseImgWrapper'}>
                    <img className={'sumPurchaseImg'} src={phone.phoneImage} alt=""/>
                </div>
                <div className={'sumPurchaseInfo'}>
                    <div className={'sumPurchaseName'}>{phone.name}</div>
                    <button className={'sumPurchaseBtn'} disabled={disabled} onClick={removeItem}>-1</button>
                    <div className={'sumPurchaseCount'}>{phone.count}</div>
                    <button className={'sumPurchaseBtn'} disabled={disabled} onClick={addItem}>+1</button>
                    <div className={'sumPurchasePrice'}>${phone.price}</div>
                </div>
            </div>
        </div>
    )
};