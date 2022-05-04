import cart from "../../Images/Shopping-Cart.png";
import './NavBar.css';
import {Link} from "react-router-dom";

export const NavBar = () => {

    return (
        <div className={'nav'}>
            <span className={'navLink'}><Link to={'/'}>Home Page</Link></span>
            <img className={'cartImg'} src={cart} alt="cart img"/>
        </div>
    )
};