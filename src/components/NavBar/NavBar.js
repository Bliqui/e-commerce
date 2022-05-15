import bag from "../../assets/images/shopping-bag-icon.png"
import './NavBar.scss';
import bananaLogo from '../../assets/images/banana-logo.png'
import {NavLink} from "react-router-dom";

export const NavBar = () => {

    return (
        <div className={'nav'}>
            <div className={'navWrapper'}>
                <NavLink to={'/'}><img src={bananaLogo} className={'logo'}/></NavLink>
                <div className={'cartImgWrapper'}>
                    <NavLink to={'/shoppingCart'}>
                        <img className={'cartImg'} src={bag} alt="cart img"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
};