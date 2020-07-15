import React from 'react'
import Shoes from './data/moccasins.json';
import { Link } from 'react-router-dom';


function Moccasins() {
    return (
        <div>
            <h1> Moccasins Shoes Variety </h1>
            <div className="productContainer">

                {Object.keys(Shoes).map(keyName => {
                    const Shoe = Shoes[keyName];
                    return (

                        <Link key={keyName}
                            className="Link"
                            to={`/moccasins/${keyName}`}>

                            <h4>{Shoe.name}</h4>
                            <img src={Shoe.simg} height={150} alt={Shoe.name} />
                        </Link>)
                })



                }

            </div>
            <br />
            <br />
        </div>
    )
}

export default Moccasins;