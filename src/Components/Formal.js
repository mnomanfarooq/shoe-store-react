import React from 'react'
import Shoes from './data/formal.json';
import { Link } from 'react-router-dom';


function Formal()  {
    return (
        <div className="product">
            <h1> Formal Shoes Variety </h1>
            <div className="productContainer">

                {Object.keys(Shoes).map(keyName=>{
                    const Shoe = Shoes[keyName];
                    return ( 
                    
                    <Link key={keyName} 
                    className="Link" 
                    to={`/formal/${keyName}`}>

                    <h4>{Shoe.name}</h4>
                    <img src={Shoe.simg} height={150} alt={Shoe.name}/>
                    </Link>)
                })



                }
            </div>

        </div>
    )
}

export default  Formal;