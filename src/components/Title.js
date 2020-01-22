import React from 'react';

function Header(props) {
    const { name } = props
    return (
        <div className="title">
            {name}
        </div>
    );
}

export default Header;
