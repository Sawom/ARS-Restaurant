import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../Hooks/useCart';
// stripe js theke payment er kaj kora hoiche
const stripePromise = loadStripe('pk_test_51NqqVXFuox1PcYmePurXvgt6Saxxv1WTLGB6BslIGvnEXckTT3KGAEJR6DDAX6mfTtKROZTdUfUykpjSa8kXNUTY00AOpwN21d')

const Payment = () => {
    const [cart] = useCart();
    // reduce function from js
    const total = cart.reduce((sum,item) => sum + item.price , 0 );
    const price = parseFloat(total.toFixed(2))

    return (
        <div  className='container'>
            <Elements stripe={stripePromise} >
                <CheckoutForm price={total} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;