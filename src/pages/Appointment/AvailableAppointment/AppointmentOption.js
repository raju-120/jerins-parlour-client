import React from 'react';

const AppointmentOption = ({ option,setTreatment }) => {

    const {name, photo, description, slots, price} = option;
    
    return (
        <div className="card bg-base-100 shadow-xl" style={{height: '40em'}}>
            <figure className="px-10 pt-10">
                <img src={photo} alt="photos" className=" rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-xl">{name}</h2>
                <p> Time slot: <span className='text-xl font-bold'>{slots.length > 0 ? slots[0] : 'Try Another Day'} </span> </p>
                <p> {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available </p>
                <p className='text-primary'>Price: <strong>$ {price}</strong> </p>
                <p>{description}</p>
                
                <div className="card-actions justify-center">
                   <label 
                        disabled={slots.length === 0}
                        htmlFor="booking-modal" 
                        className="btn btn-primary"
                        onClick={() =>setTreatment(option)}
                        >
                            Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;