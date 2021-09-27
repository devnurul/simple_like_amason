import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [product, setProduct] =useState([]);

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then (data => { 
            console.log(data);
        })
    },[])
    return (
        <div>
            <h2>{}</h2>
        </div>
    );
};

export default Shop;