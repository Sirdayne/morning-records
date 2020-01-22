import React from 'react';
import logo from "../logo.svg";

function Header() {
    return (
        <div className="header">
            <img src={logo} className="header__logo" alt="logo" />
        </div>
    );
}

export default Header;
