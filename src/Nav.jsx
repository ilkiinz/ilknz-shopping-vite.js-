import React from "react";
import { Link } from 'react-router-dom';
import Logo from "./assets/logo.png"
import "./Nav.css";
function Nav() {
    return (
        <div>
            <nav className="navbar">
            <Link to={'/'}><img src={Logo} alt="Logo" className="logo" /></Link>

                <div>
                
                    <Link to={'/about'} className="link">Women</Link>

                    <Link to={'/our people'} className="link">Men</Link>

                    <Link to={'/offices'} className="link">Shop All</Link>  
                    
                    <Link to={'/about'} className="link">About</Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav;