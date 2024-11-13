import React, { useState } from "react";
import { Link } from 'react-router-dom';
import amazon_logo from './images/amazon_logo.png';
import Login from "../Loginpage/Login";
import './Navbar.css';

const Navbar = ({ inputType, onInputChange, onSearch }) => {
    const [showsign, setShowsign] = useState(false);

    const onEnter = (event) => {
        if (event.key === 'Enter') {
            onSearch();
        }
    };

    const handleLogoClick = () => {
        window.location.reload(); 
    };

    return (
        <div id="backtotop" className="navbar1">
            <div className="border1">
                <Link className="panelname" to="/" onClick={handleLogoClick}>
                    <img className="nav1-logo" src={amazon_logo} alt="Amazon Logo" />
                </Link>
            </div>

            <div className="nav1-address border1">
                <i className="fa-solid fa-location-dot"></i>
                <p>Update Location</p> 
            </div>

            <div className="nav1-search">
                <select className="search-select">
                    <option>All categories</option>
                    <option>Amazon Fashion</option>
                    <option>Beauty</option>
                    <option>Electronics</option>
                    <option>Books</option>
                </select>
                <input 
                    type="text"
                    value={inputType}
                    onChange={onInputChange}
                    onKeyDown={onEnter}
                    placeholder="search Amazon.in"
                    className="search-input" 
                />
                <button className="search-icon" onClick={onSearch}>
                    <div>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </button>
            </div>

            <button className="signin12" onClick={() => setShowsign(true)}>
                <div className="nav1-signina border1">
                    <p>Hello, sign in<br/>Accounts & Lists</p>
                </div>
            </button>

            {showsign && (
                <div className="fullscreen-overlay">
                    <Login onClose={() => setShowsign(false)} />
                </div>
            )}

            <Link className="agd" to="/">
                <div className="nav1-re border1">
                    <p className="addd3">Returns<br/>& Orders</p>
                </div>
            </Link>

            <div className="nav1-cart border1">
                <div>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="carttxt">
                    Cart<div className="count51">0</div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;
