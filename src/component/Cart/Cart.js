import React from 'react';

const Cart = (props) => {
    return (
        <div>
             <h4>This is cart</h4> 
                <h4>Oreder Summery: {props.cart.length}</h4>
        </div>
    );
};

export default Cart;