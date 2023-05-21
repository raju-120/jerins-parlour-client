import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const {treatment,price,appointmentDate,slot} = booking;
    return (
        <div>
            <h3 className="text-3xl text-center">Payment for {treatment}</h3>
            <p className="text-xl">Please pay {price} for your appointment on {appointmentDate} at {slot}</p>
        </div>
    );
};

export default Payment;