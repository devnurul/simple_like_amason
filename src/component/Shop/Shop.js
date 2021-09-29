import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] =useState([]);
    const [cart, setCart] = useState([]);

    const handerAddProduct = (product) => {
      console.log('product added');
      const newCart = [...cart, product]
      setCart(newCart)
    }

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
                 products.map(prd => <Product product={prd}
                  handleAddProduct = {handerAddProduct}
                 ></Product>)
               }
             </div>
             <div className="sidebar">
               <Cart></Cart>
             </div>
        </div>
    
    );
};

export default Shop;