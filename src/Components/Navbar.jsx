import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.style.css'
import ShoppingApp from '../assets/undraw_shopping_eii3.svg'



const Navbar = () => {

    const [isMobile, setIsMobile] = useState(true)

    return (
        <nav className="navbar">
            <h3 className="logo"><img src={ShoppingApp} alt="logo" style={{height:'4rem', width:'6rem'}}/></h3>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
                    <Link to="/" exact className="home">
                        <li>Home</li>
                    </Link>

                    <Link to="/" exact className="products">
                        <li>Products</li>
                    </Link>

                    <Link to="/" exact className="cart">
                        <li>Cart</li>
                    </Link>  
                </ul>
            <button className="mobile-menu-icon">
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
