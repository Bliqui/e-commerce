import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './ProductPage.css';
import {Loader} from "../Loader/Loader";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

export const ProductPage = () => {

    const phoneInfo = useParams()
    const phones = useSelector(state => state.phones)
    const [phone, setPhone] = useState();
    const [loader, setLoader] = useState(true)

    function findId() {
        const curPhone = phones.filter((e) => {
            console.log(typeof e.id, typeof phoneInfo.id)
            if (e.id === phoneInfo.id) {

                /*console.log(phoneInfo)*/
                return e
            }
        })
        return curPhone[0]
    }

    useEffect(() => {
        setPhone(findId());
        return(setLoader(false))
    })

    console.log(phone)

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
                    <NavLink to={'/shoppingCart'}><button className={'buyBtn'}>Buy now</button></NavLink>
                </div>
            </div>
        </div>
    );
};