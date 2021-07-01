import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.style.css'
import ShoppingApp from '../assets/undraw_shopping_eii3.svg'

import { useCart } from '../lib/cart.context';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false)
    
    const cart = useCart();
    const cartItemsTotal = cart.reduce((total, item) => total + item.quantity, 0);
    const cartPriceTotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );


    return (
        <nav className="navbar">
            <h3 className="logo"><img src={ShoppingApp} alt="logo" style={{height:'4rem', width:'6rem'}}/></h3>
                <ul 
                    className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile(false)}
                >
                    <Link to="/" exact className="home">
                        <li>Home</li>
                    </Link>

                    <Link to="/" exact className="products">
                        <li>Products</li>
                    </Link>

                    <Link to="/checkout" exact className="cart">
                        <li><ShoppingCartIcon/>
                        <div className="cart-child">
                             {cartItemsTotal}
                         </div>
                         <div className="cart-child">Rs.{cartPriceTotal}</div>
                        </li>
                    </Link>  
                </ul>
            <button className="mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}>
                {
                    isMobile ? (
                        <i className="fas fa-times"></i>
                    ): (
                        <i className="fas fa-bars"></i>
                    )
                }
            </button>
        </nav>
    )
}

export default Navbar
