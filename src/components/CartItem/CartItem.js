import "./CartItem.scss"
import {useDispatch} from "react-redux";
import {useState} from "react";

export const CartItem = ({price, phoneId, count, phoneImage, name}) => {
    const dispatch = useDispatch();
    const [disabled, setDisable] = useState(false);
    const [counter, setCounter] = useState(1);

    function addItem() {
        setDisable(true);
        return setTimeout(() => {
            dispatch({type: 'ADD_PHONE', value: {price, phoneId}})
            setDisable(false)
        }, 500)
    };

    function removeItem() {
        if (counter > 0) {
            setDisable(true)
            setTimeout(() => {
                dispatch({type: 'REMOVE_PHONE', value: price})
                setCounter(prevState => prevState - 1)
                setDisable(false)
            }, 500)
        } else {
            alert('AoAo')
        };
    };

    return (
        <div className={'sumPurchaseBody'}>
            <div className={'sumPurchaseWrapper'}>
                <div className={'sumPurchaseImgWrapper'}>
                    <img className={'sumPurchaseImg'} src={phoneImage} alt=""/>
                </div>
                <div className={'sumPurchaseInfo'}>
                    <div className={'sumPurchaseName'}>{name}</div>
                    <button disabled={disabled} onClick={removeItem}>-1</button>
                    <div className={'sumPurchaseCount'}>{count}</div>
                    <button disabled={disabled} onClick={addItem}>+1</button>
                    <div className={'sumPurchasePrice'}>${price}</div>
                </div>
            </div>
        </div>
    );
};