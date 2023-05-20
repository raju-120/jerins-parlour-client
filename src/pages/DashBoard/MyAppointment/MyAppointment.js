import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from 'react-query';

const MyAppointment = () => {

    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}` ;

    const { data: bookings =[] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () =>{
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            <h2 className="text-3xl mb-5">My Appointments</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {
                        bookings &&
                        bookings?.map((booking,i) =>
                            <tr key={booking._id} className="hover">
                                <th>{i+1}</th>
                                <td>{booking.user}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                            </tr>
                        )
                    }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;