import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('error ',error);
            setCardError(error.message);
        }
        else{
            console.log('error ',paymentMethod);
            setCardError('');
        }

    }


    return (
        <div>
           {/* checkout form nicher link theke */}
            {/* https://github.com/stripe/react-stripe-js/blob/master/examples/hooks/0-Card-Minimal.js */}
             <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                <button type="submit" className='btn btn-outline btn-sm  border-4 mt-6' disabled={!stripe}>
                    Pay
                </button>
            </form> 
            {/* show error */}
            {cardError && <p className='text-red-600 ml-8'> {cardError} </p> }
        </div>
    );
};

export default CheckoutForm;