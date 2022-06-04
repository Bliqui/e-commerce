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
            dispatch({type: 'ADD_TO_FINAL_PRICE', value: phone})
            setDisable(false)
        }, 500)
    };

    function removeItem() {
            setDisable(true)
            setTimeout(() => {
                dispatch({type: 'REMOVE_CART_ITEM', value: phone})
                dispatch({type: 'REMOVE_FROM_FINAL_PRICE', value: phone})
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
                    <div className={'sumPurchaseProductInfoWrapper'}>
                       <div className={'sumCountAndPriceWrapper'}>
                            <button className={'sumPurchaseBtn'} disabled={disabled} onClick={removeItem}>-</button>
                            <div className={'sumPurchaseCount'}>{phone.count}</div>
                            <button className={'sumPurchaseBtn'} disabled={disabled} onClick={addItem}>+</button>
                       </div>
                        <div className={'sumPurchasePrice'}>${phone.price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};