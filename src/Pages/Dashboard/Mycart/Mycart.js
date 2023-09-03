import React from 'react';
import useCart from '../../../Hooks/useCart';

const Mycart = () => {
    const [cart] = useCart();
    // 0 initial value. sum er sathe add kortechi
    const total = cart.reduce((sum,item)=> item.price + sum, 0)
    return (
        <div>
            <h3 className='text-2xl'> Total Items: {cart.length} </h3>
            <h3 className='text-2xl'>Total price: {total} </h3>
            <button className="btn btn-outline  border-4 mt-6">Pay</button>
        </div>
    );
};

export default Mycart;