import React from 'react';
import './Product.css';


const Product = (props) => {
    const {name, img, seller,price, category} =props.product;
    return (
        <div className="product">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="productInformation">
                <h2>{name}</h2>
                <h3>Category: {category}</h3>
                <h4>Seller Name:{seller}</h4>
                <h4>Pirice: ${price}</h4>
                <button onClick ={() => props.handleAddProduct(props.product)}> ❤ Add to cart</button>
            </div>
        </div>
    );
};

export default Product;
