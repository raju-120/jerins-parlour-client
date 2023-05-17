import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment,selectedDate,setTreatment }) => {
    //treatment is just another name of appointmentOptions with name,slots,_id
    const {name:treatmentName, slots } = treatment;
    const date = format(selectedDate,'PP');

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        

        const booking={
            appointmentDate: date,
            treatment : treatmentName,
            user:name,
            slot,
            email,
            phone

        }
        console.log(booking);
        setTreatment(null);
    }
    return (
        <>
          <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'> 
                        <input type="text" disabled value={date} className="input input-bordered w-full " />
                        
                        <select name='slot' className="select select-bordered w-full">
                            <option>Select appointment slots?</option>
                            {
                                slots.map((slot,i) => <option 
                                value={slot}
                                key={i} 
                                >{slot}</option>)
                            }
                        </select>
                        
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full " />
                        <input name='email' type="text" placeholder="Email" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full " />
                        
                        <br />
                        <input className='w-full  btn btn-accent' type="submit" value='submit'/>
                    </form>
                </div>
            </div>  
        </>
    );
};

export default BookingModal;