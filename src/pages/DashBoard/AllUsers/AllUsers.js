import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import useTitle from '../../../hooks/useTitle';

const AllUsers = () => {
    useTitle('All Users');

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res = await fetch('https://jerins-parlour-server-eta.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id =>{
        fetch(`https://jerins-parlour-server-eta.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then( res => res.json())
        .then(data => {
            if(data.matchedCount > 0){
                toast.success('Make Admin successfully');
                refetch();
            }
        })
    }

    return (
        <div>
            <h2 className='text-3xl mb-5'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        users?.map((user,i) => <tr key={user._id} className='hover'>
                            <th>{i+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {
                                    user?.role !== 'admin' && 
                                    <button onClick={() =>handleMakeAdmin(user._id)} 
                                    className=' btn btn-xs '
                                    >Make Admin
                                    
                                    </button>
                                }
                            </td>
                            <td><button className='btn btn-xs btn-warning'>Delete</button></td>
                            
                        </tr>
                        )
                    }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;