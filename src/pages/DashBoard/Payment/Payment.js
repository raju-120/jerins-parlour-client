import React from 'react';
import {loadStripe} from '@stripe/stripe-js'
import { useLoaderData, useNavigation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import Loading from '../../Home/Shared/Loading/Loading';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

console.log(stripePromise);


const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const {treatment,price,appointmentDate,slot} = booking;

    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-3xl ml-10 lg:ml-96 items-center text-amber-500 mt-5">Payment for {treatment}</h3>
            <p className="text-xl mt-10 text-center">Please pay <strong className='text-indigo-700'>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='lg:mx-64 mx-5 lg:w-96 my-24'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm 
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;