import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
// stripe js theke payment er kaj kora hoiche
const stripePromise = loadStripe('pk_test_51NqqVXFuox1PcYmePurXvgt6Saxxv1WTLGB6BslIGvnEXckTT3KGAEJR6DDAX6mfTtKROZTdUfUykpjSa8kXNUTY00AOpwN21d')

const Payment = () => {
    return (
        <div  className='container'>
            <Elements stripe={stripePromise} >
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;