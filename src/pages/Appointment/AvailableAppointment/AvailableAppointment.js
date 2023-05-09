import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate}) => {
    return (
        <section className='mt-16'>
            <p className='text-center text-2xl font-bold text-info'>Available Appointment {format(selectedDate, 'PP')}</p>
        </section>
    );
};

export default AvailableAppointment;