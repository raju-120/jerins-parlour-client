import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import pic from '../../assets/icons/Group 573.png'

const Login = () => {

    const {register, handleSubmit} = useForm();
    const [data, setData] = useState('');

    return (
        <div className='h-[600px] flex justify-center items-center bg-base-200 rounded-xl'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold text-center'>Login Now</h2>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            
                    <div className="form-control w-full max-w-xs mt-6">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" className="input input-bordered w-full " {...register("email")} /> 
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full " {...register("password")} /> 
                        <label className="label">
                            <span className="label-text">Forget Password </span>
                        </label>
                    </div>

                     
                    <input className='btn btn-primary  w-full mx-w-xs' value="Login" type="submit" />
                </form>
                <p className='mt-3'>New to Jerins parlour?<Link to='/' className='text-green-500'>Create a New account.</Link></p>
                <div className="divider">OR</div>
                <div className='flex justify-evenly btn'>
                    <div>
                        <img style={{width: '30px'}} src={pic} alt="" />
                    </div>
                    <div>
                        <h2>Google sign in</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;