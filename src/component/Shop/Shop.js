import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] =useState([]);

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then (data => { 
            setProducts(data);
        })
    },[])
    return (
        <div className="shopPage">
             <div> 
               {
                 products.map(prd => <Product product={prd}></Product>)
               }
             </div>
             <div className="sidebar">
                <h4>I am cart part</h4> 
             </div>
        </div>
    
    );
};

export default Shop;