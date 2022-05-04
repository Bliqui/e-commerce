import "./MainBody.css";
import {ProductItem} from "../ProductItem/ProductItem";
import {useSelector} from "react-redux";

export const MainBody = () => {

    const phones = useSelector(state => state.phones);

    return (
        <div className={'mainBody'}>
            <div className={'mainBody_wrapper'}>
                {phones.map((phone) => {
                    return <ProductItem name={phone.name} phoneImage={phone.phoneImage} price={phone.price}/>
                })}
            </div>
        </div>
    )
}