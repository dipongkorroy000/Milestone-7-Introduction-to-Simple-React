import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div className='flex gap-1 p-2'>
            {cart.map(bottle => <div key={bottle.id}>
                <img className='h-32 w-32 m-2' src={bottle.img} alt="" />
                <button onClick={()=>handleRemoveFromCart(bottle.id)}>remove</button>
            </div>)}
        </div>
    );
};

export default Cart;