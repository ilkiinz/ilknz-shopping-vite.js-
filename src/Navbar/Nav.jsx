import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png"
import "./Nav.css";
function Nav() {
    return (
        <div>
            <nav className="navbar-cont">
            <Link to={'/'}><img src={Logo} alt="Logo" className="logo" /></Link>

                <div className="cont-link">
                
                    <Link to={'/'} className="link">Home</Link>

                    <Link to={'/women'} className="link">Women</Link>

                    <Link to={'/men'} className="link">Men</Link>

                    <Link to={'/shop'} className="link">Shop All</Link>  
                    
                    <Link to={'/about'} className="link">About</Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav;