import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment,selectedDate,setTreatment, refetch}) => {


    //treatment is just another name of appointmentOptions with name,slots,_id
    const {name:treatmentName, slots,price } = treatment;
    const date = format(selectedDate,'PP');
    const {user} = useContext(AuthContext);

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
            phone,
            price

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){

                setTreatment(null);
                toast.success('Booking Confirmed');
                refetch();
            }
            else{
                toast.error(data.message);
            }
        })
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
                            
                            {
                                slots?.map((slot,i) => <option 
                                value={slot}
                                key={i} 
                                >{slot}</option>)
                            }
                        </select>
                        
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full " />
                        <input name='email' defaultValue={user?.email} disabled type="text" placeholder="Email" className="input input-bordered w-full " />
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