import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import pic from '../../assets/icons/Group 573.png'
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {

    const {createUser,updateUser} = useContext(AuthContext)
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (data) =>{
        console.log(data);
        setSignUpError('');
        createUser(data.email , data.password)
       
        .then( result =>{
            const user = result.user;
            console.log(user);
            toast('User created successfully');
            
            const userInfo ={
                displayName: data.name
            }
            updateUser(userInfo)
                .then(() =>{
                    navigate('/');
                })
                .catch(err => console.log(err))
        })

        .catch(err => {
            console.log(err);
            setSignUpError(err.message)
        })

       }
    return (
        <div className='h-[600px] flex justify-center items-center bg-base-200 rounded-xl'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold text-center'>Register Now</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
            
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

                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        
                        <input type="password" 
                            className="input input-bordered w-full " 
                            {...register("password",{
                                required:"Password is required",
                                minLength: {value: 6, message: 'Password must be 6 character'},
                                pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be have a uppercase, number & special characters.'}
                            })} /> 
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    
                        
                    </div>

                     
                    <input className='btn btn-primary  w-full mx-w-xs' value="Sign Up" type="submit" />
                    <div>
                        {   signUpError && <p className='text-red-500'>{signUpError}</p>}
                    </div>
                </form>
                <p className='mt-3'>Already registered?<Link to='/login' className='text-green-500 mx-2'>Please Login.</Link></p>
                <div className="divider">OR</div>
                <div className='flex justify-evenly btn btn-outline'>
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

export default SignUp;