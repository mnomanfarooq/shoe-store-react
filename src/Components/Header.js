import React from 'react'
import { Link } from 'react-router-dom';

function Header()  {
    return (
        <div>
            <Link to="/"> Home </Link> | 
            <Link to="/about"> About </Link> | 
            <Link to="/product"> Products </Link> | 
            <Link to="/formal"> Formal </Link>

        </div>
    );
}

export default  Header;