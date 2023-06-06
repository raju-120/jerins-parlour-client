import React  from 'react';
import {loadStripe} from '@stripe/stripe-js'
import { useLoaderData, useNavigation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import Loading from '../../Home/Shared/Loading/Loading';
import useTitle from '../../../hooks/useTitle';
/* import card from '../../../assets/icons/credit-card 1.png'
import pal from '../../../assets/icons/image 17.png'
import Paypal from './Paypal/Paypal'; */


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

console.log(stripePromise);


const Payment = () => {

    useTitle('Payment')
    const booking = useLoaderData();
    const navigation = useNavigation();
    const {treatment,price,appointmentDate,slot} = booking;
    
    /* 
    const [select, setSelect] = useState({
        isAgree: false, //checkbox
        selection: 'credit/debit card' //radio
    }); 
 */

    /* const handleChange = event =>{
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setSelect({
            ...select,
            [name] : value
        })
    } */
    

    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-3xl ml-10 lg:ml-96 items-center text-amber-500 mt-5">Payment for {treatment}</h3>
            <p className="text-xl mt-10 text-center">Please pay <strong className='text-indigo-700'>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            {/* <h2 className='mt-14 lg:ml-48 text-gray-500'>Pay with</h2> */}
            
            {/* <div className='mt-5 lg:mx-56 grid grid-cols-1 lg:grid-cols-2'>
                
                <div className='flex'>
                    <input className='mx-2' type="radio" name='selection' value='credit/debit card' 
                        onChange={handleChange} checked={select.selection === 'credit/debit card'}/>
                    
                    <div className='flex'>
                        <div>
                            <img src={card} alt="" style={{width: '30px'}}/>
                        </div>
                        <div className='py-1'>
                            <label>Credit/Debit card</label>
                        </div>
                    </div>

                </div>

                <div className='flex'>
                    <input className='mx-2' type="radio" name='selection' value='paypal' 
                        onChange={handleChange} checked={select.selection === 'paypal'}/>
                    <div className='flex'>
                        <div>
                            <img src={pal} alt="" style={{width: '30px'}}/>
                        </div>
                        <div className='py-1'>
                            <label>Paypal</label>
                        </div>
                    </div>
                </div>
                
                <h2>Selected method is: {select.selection}</h2>
            </div> */}

            {/* Payment section  */}

            <div className='lg:mx-64 mx-5 item lg:w-96 my-24'>
                {
                    
                    /* select.selection === 'credit/debit card' && */
                    <Elements stripe={stripePromise}>
                        <CheckOutForm 
                            booking={booking}
                        />
                    </Elements>
                }
                {/* {
                    select.selection === 'paypal' &&
                    <Paypal>
                        
                    </Paypal>
                } */}
            </div>

            
             
        </div>
    );
};

export default Payment;