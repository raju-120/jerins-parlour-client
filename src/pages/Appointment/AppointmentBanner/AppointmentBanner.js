import React from 'react';
import pic from '../../../assets/images/sidephoto.jpeg';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={pic} alt='makeup_Photo' className="lg:max-w-lg rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker 
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;