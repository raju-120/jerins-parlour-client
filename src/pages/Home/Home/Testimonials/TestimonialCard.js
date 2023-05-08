import React from 'react';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({test}) => {
    const {name, icon,designation,description,rating} = test;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className='flex'>
                <div className="mx-5 w-16 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                    <img src={icon} alt=''/>
                </div>
                <div>
                    <h2 className="font-bold card-title">{name}</h2>
                    <p className='font-semibold'>{designation}</p>
                </div>
            </div>
            <div className="card-body">
                <p>{description}</p>
                <div className='flex'>
                    <div>
                        <p>Rating: {rating}</p>
                    </div>
                    <div className='py-1'>
                        <FaStar className='text-yellow-400'></FaStar>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default TestimonialCard;