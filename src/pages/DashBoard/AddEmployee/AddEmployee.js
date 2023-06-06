import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../Home/Shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const AddEmployee = () => {
    
    useTitle('AddEmployees');
    const {register, formState: {errors}, handleSubmit} = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_Key;

    const navigate = useNavigate()
     


    const {data: specialties, isLoading} = useQuery({
        queryKey: ['specialty'],
        queryFn: async () =>{
            const res = await fetch('https://jerins-parlour-server-eta.vercel.app/appointmentSpecialty')
            const data = await res.json();
            return data;
        }
    })

    const handleAddEmployee = data=>{
        console.log(data.image[0]); 
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            if(imgData.success){
                console.log(imgData.data.url);
                const employee = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image : imgData.data.url
                } 

                //save employee information to the database
                fetch('https://jerins-parlour-server-eta.vercel.app/employees',{
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(employee)
                }) 
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/manageemployee');
                })
            };

            
        })

    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-3xl">Add Employees</h2>
            <form onSubmit={handleSubmit(handleAddEmployee)}>
            
                    <div className="form-control w-full max-w-xs mt-6">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" 
                            className="input input-bordered w-full " 
                            {...register("name", {
                                required:"User name is required"
                            })} /> 
                            
                         {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" 
                            className="input input-bordered w-full " 
                            {...register("email", {
                                required:"Email is required"
                            })} /> 
                            
                         {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select
                        {...register('specialty')}
                         className="select select-bordered w-full max-w-xs">
                            
                            {
                                specialties?.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>)
                            }
                            
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs mt-6">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file" 
                            className="input input-bordered w-full p-2 " 
                            {...register("image", {
                                required:"Photo is required"
                            })} /> 
                            
                         {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                    </div>

                    

                     
                    <input className='btn mt-5 btn-primary  w-full mx-w-xs' value="Add Employee" type="submit" />
                    
                </form>
        </div>
    );
};

export default AddEmployee;