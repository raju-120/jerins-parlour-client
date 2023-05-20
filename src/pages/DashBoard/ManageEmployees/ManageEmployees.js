import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Home/Shared/Loading/Loading';

const ManageEmployees = () => {

    const {data: employees =[], isLoading} = useQuery({
        queryKey: ['employees'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/employees')
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-3xl mt-5">Manage Employees</h2>
            <div className="overflow-x-auto mt-5 mb-5">
                <table className="table w-full">
                    
                    <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Specialty</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        employees?.map((employee,i) => <tr 
                           key={employee._id} 
                           className="hover">

                            <th>{i+1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="w-24 mask mask-squircle">
                                        <img src={employee.image} alt='' />
                                    </div>
                                </div>
                            </td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.specialty}</td>
                            <td><button className='btn btn-sm btn-error'>Delete</button> </td>
                    </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageEmployees;