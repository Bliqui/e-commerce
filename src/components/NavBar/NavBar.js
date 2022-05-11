import cart from "../../Images/Shopping-Cart.png";
import './NavBar.css';
import {Link} from "react-router-dom";
import bananaLogo from '../../Images/banana-logo.png'
import {NavLink} from "react-router-dom";

export const NavBar = () => {

    return (
        <div className={'nav'}>
            <div className={'navWrapper'}>
                <Link to={'/'}><img src={bananaLogo} className={'logo'}/></Link>
                <div className={'cartImgWrapper'}>
                    <NavLink to={'/shoppingCart'}>
                        <img className={'cartImg'} src={cart} alt="cart img"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
};