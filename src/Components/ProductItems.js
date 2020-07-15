import React from 'react'
import { useParams } from 'react-router-dom';
//import Shoes from './../Shoes.json';
import Shoes from './data/moccasins.json'


function ProductItems()  {
    const { id } = useParams();
    const Shoe = Shoes[id];

    if (!Shoe) 
    return <h2>Product Not Found!</h2>
    return (
        <div>
            <h1> Product Items </h1>
            <div>
                <h4>{Shoe.name}</h4>
                <img src={Shoe.fimg} height={400} alt={Shoe.name} />
            <div>
            <h3>Product Details</h3>
            <br />
            {Shoe.details}
           </div>
            </div>
        </div>
    )
}

export default  ProductItems;