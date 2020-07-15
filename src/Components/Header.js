import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Link to="/"> Home </Link> |
            <Link to="/about"> About </Link> |
            <Link to="/formal"> Formal Shoes </Link> |
            <Link to="/moccasins"> Moccasins Shoes </Link>

        </div>
    );
}

export default Header;