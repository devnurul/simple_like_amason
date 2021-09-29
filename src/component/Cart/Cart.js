import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce( (total , prod) => total + prod.price ,0 );
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;  
        }
// shipping conditions
    let shipping = 0;
    if (total >= 1050) {
        shipping = 0;
    }
    else if( total >= 550 ){
        shipping = 20.99;
    }
    else if( total === 0){
        shipping = 0
    }
    else{
        shipping =50.99
    }
    const tex = (total/5).toFixed(2);
    const grandTotal = (total + shipping + Number(tex)).toFixed(2)
    return (
        <div>
                <h2>Shopping Cart Area</h2>
              <h4>Oreder Summery</h4> 
              <p> Items Ordered: {cart.length} </p>
              <p>Sub total price: ${total.toFixed(2)}</p>
              <p className= "shipping"> Shipping Cost: ${shipping}
                <div>
                <h5>If you spend $1050, you will get free shipping</h5>
                <h5>If you spend $550, you will get discount of shipping</h5>
                </div>
              </p>

              <p>Tex + vat: ${tex} </p>
              <hr />
              <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;