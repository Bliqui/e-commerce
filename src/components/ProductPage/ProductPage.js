import React, {useEffect, useReducer, useState} from 'react';
import {useParams} from "react-router-dom";
import './ProductPage.scss';
import {Loader} from "../Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

export const ProductPage = () => {

    const phoneInfo = useParams()
    const phones = useSelector(state => state.phones)
    const [phone, setPhone] = useState();
    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch();

    function findId() {
        const curPhone = phones.filter((e) => {
            if (e.id === phoneInfo.id) {

                return e
            }
        })
        return curPhone[0]
    }

    useEffect(() => {
        setPhone(findId());
        return(
            setLoader(false)
        )
    })


    function addPhone () {
        dispatch({type: 'ADD_PHONE', value: {price: phone.price, phoneId: phone.id}})
        dispatch({type: 'ADD_CART_ITEM', value: phone})
    }

    if (loader) {
        return <Loader/>
    }
    return (
        <div className={'productPageBody'}>
            <div className={'productPageWrapper'}>
                <div className={'imageWrapper'}>
                    <img src={phone.phoneImage} className={'phoneBigImage'} alt="phoneImg"/>
                </div>
                <div className={'aboutPhone'}>
                    <div className={'phoneName'}>{phone.name}</div>
                    <div className={'phoneDescription'}>{phone.description}</div>
                    <div className={'phonePrice'}>${phone.price}</div>
                </div>
                <div className={'buyBtnWrapper'}>
                    <NavLink to={'/shoppingCart'}><button onClick={addPhone} className={'buyBtn'}>Buy now</button></NavLink>
                </div>
            </div>
        </div>
    );
};

// На нажатие кнопки юзаю редьюсер, по данным выше (юзПарамс и прочему) создаю элемент в корзине