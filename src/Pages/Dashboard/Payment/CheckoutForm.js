import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../Authentication/useAuth/useAuth';
import Swal from 'sweetalert2';
import {FaDollarSign} from 'react-icons/fa';

const CheckoutForm = ({price, cart}) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [])

    // payment done howar pore cart er element shob gula remove kore dibe.
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('error', error)
            setCardError(error.message);
            return
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            // console.log(confirmError);
            return;
        }

        // console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                status: 'service pending',
                itemNames: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    // console.log(res.data);
                    if (res.data.insertedId) {
                        // display confirm
                    }
                })
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
                required > </CardElement>
                <button className='btn btn-outline btn-sm  border-4 mt-6' type="submit" disabled={!stripe || !clientSecret || processing}>
                    <FaDollarSign></FaDollarSign> Pay
                </button>
            </form> 
            {/* show error */}
            {cardError && <p className='text-red-600 ml-8'> {cardError} </p> }
            {transactionId && <p className='text-green-500'> Transaction complete with transactionId: {transactionId} </p> }
        </div>
    );
};

export default CheckoutForm;