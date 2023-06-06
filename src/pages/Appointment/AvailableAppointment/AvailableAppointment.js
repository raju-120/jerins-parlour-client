import { format } from 'date-fns';
import React, {  /* useEffect, */ useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../Home/Shared/Loading/Loading';

const AvailableAppointment = ({selectedDate}) => {
    //const [appointmentServices,setAppointmentServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate,'PP')
    const {data:appointmentServices=[], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: async() => {
                    const res =await fetch(`https://jerins-parlour-server-eta.vercel.app/appointmentOption?date=${date}`)
                    const data = await (res.json())
                    return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    /* useEffect(()=>{
        fetch('service.json')
            .then(res => res.json())
            .then(data => {
                setAppointmentServices(data);
            })
    },[]) */
    
    return (
        <section className='mt-16'>
            <p className='text-center text-2xl font-bold text-info'>Available Appointment {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14'>
                {
                    appointmentServices.map(option => <AppointmentOption
                    key={option._id}
                    option={option}
                    setTreatment={setTreatment}
                    >

                    </AppointmentOption>)
                }
                {
                    treatment &&
                    <BookingModal
                        selectedDate={selectedDate}
                        treatment={treatment}
                        setTreatment={setTreatment}
                        refetch={refetch}
                    ></BookingModal>
                }
            </div>
        </section>
    );
};

export default AvailableAppointment;