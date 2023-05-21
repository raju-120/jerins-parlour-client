import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Home/Shared/Loading/Loading';
import ConfirmationModal from '../../Home/Shared/ConfirmationModal/ConfirmationModal';
import { toast } from 'react-hot-toast';

const ManageEmployees = () => {

    const [deletingEmployee,setDeletingEmployee] = useState(null);

    const closeModal = () =>{
        setDeletingEmployee(null);
    }


    const {data: employees =[], isLoading, refetch} = useQuery({
        queryKey: ['employees'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/employees')
            const data = await res.json();
            return data;
        }
    })

    
    const handleDeleteEmployee = employee =>{
        console.log(employee);
        fetch(`http://localhost:5000/employees/${employee._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount >0){
                toast.success(`${employee.name} deleted successfully.`)
                refetch();
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-3xl mt-5">Manage Employees : {employees.length} data</h2>
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
                            <td>
                                <label onClick={() => setDeletingEmployee(employee)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                
                            </td>
                    </tr>)
                    }
                    </tbody>
                </table>
            </div>
            {
                deletingEmployee && <ConfirmationModal
                    title={`Are You sure you want to delete?`}
                    message={`If you delete ${deletingEmployee.name}.It can not be recover.`}
                    successAction = {handleDeleteEmployee}
                    successButtonName = 'Delete'
                    modalData = {deletingEmployee}
                    closeModal={closeModal}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageEmployees;