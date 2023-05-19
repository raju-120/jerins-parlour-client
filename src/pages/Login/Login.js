import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import pic from '../../assets/icons/Group 573.png'
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/UseToken';

const Login = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const {signIn} = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, { replace: true})
    }
    
    const handleLogin = (data) =>{
        console.log(data)
        setLoginError('');
       
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setLoginUserEmail(data.email);
        })
        .catch( err => {
            console.log(err.message)
            setLoginError(err.message)
        })
       }

    return (
        <div className='h-[600px] flex justify-center items-center bg-base-200 rounded-xl'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold text-center'>Login Now</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
            
                    <div className="form-control w-full max-w-xs mt-6">
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

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        
                        <input type="password" 
                            className="input input-bordered w-full " 
                            {...register("password",{
                                required:"Password is required",
                                minLength: {value: 6, message: 'Password must be 6 character'},
                                
                            })} /> 
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    
                        <label className="label">
                            <span className="label-text">Forget Password </span>
                        </label>
                    </div>

                     
                    <input className='btn btn-primary  w-full mx-w-xs' value="Login" type="submit" />
                    <div>
                        {
                            loginError && <p className='text-red-500'>{loginError}</p>
                        }
                    </div>
                </form>
                <p className='mt-3'>New to Jerin's parlour?<Link to='/signup' className='text-green-500 mx-2'>Create a New account.</Link></p>
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

export default Login;