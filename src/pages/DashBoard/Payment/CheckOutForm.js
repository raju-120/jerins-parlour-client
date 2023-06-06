import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const CheckOutForm = ({booking}) => {

    const [cardError,setCardError] = useState('');
    const [success,setSuccess] = useState('');
    const [processing,setProcessing] = useState(false);
    const [transactionId,setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const {price, email,user, _id} = booking;


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            authorization: `bearer ${localStorage.getItem('accessToken')}`
         },
          body: JSON.stringify({ price }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if( !stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            return;
        }

        const { error/* , paymentMethod */ } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if(error){
            console.log(error);
            setCardError(error.message);
        }
        else{
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user,
                  email: email                  
                },
              },
            },
        );

        if(confirmError){
            setCardError(confirmError.message);
            return;
        }
        if(paymentIntent.status === "succeeded"){
            console.log('card info',card)
            //store payment information into the db
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id,
            }
            fetch('http://localhost:5000/payments',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    toast.success('Congrats! Your payment completed')
                    setSuccess('Congrats! Your payment completed');
                    setTransactionId(paymentIntent.id);
                }
            })
        }
        setProcessing(false);

    }


    return (
        <div className='mb-10'>
            <form onSubmit={handleSubmit}>
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
                <button  
                className='btn mt-14 w-full lg:w-96  btn-info' 
                type="submit" 
                disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>

            {
                success && 
                <div className='my-16'>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckOutForm;