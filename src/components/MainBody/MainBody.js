import "./MainBody.scss";
import {ProductItem} from "../ProductItem/ProductItem";
import {useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import {ScrollToTop} from "../ScrollToTop/ScrollToTop";

export const MainBody = () => {

    const phones = useSelector(state => state.product.phones);

    return (
        <div className={'mainBody'}>
            <div className={'mainBody_wrapper'}>
                <div className={'mainBody_row'}>
                    {phones.map((phone) => {
                        return <NavLink key={phone.id} to={`product/${phone.id}`}>
                            <ProductItem name={phone.name}
                                         phoneImage={phone.phoneImage}
                                         price={phone.price}
                            />
                        </NavLink>
                    })}
                    <ScrollToTop />
                </div>
            </div>
        </div>
    )
}