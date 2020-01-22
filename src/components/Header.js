import React from 'react';
import logo from "../logo.svg";

function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <img src={logo} className="header-container__logo" alt="logo" />
            </div>
            <h1 className="header-title">Morning Records</h1>
        </div>
    );
}

export default Header;
