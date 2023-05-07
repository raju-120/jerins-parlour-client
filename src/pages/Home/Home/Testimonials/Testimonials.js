import React from 'react';
import { FaStar } from 'react-icons/fa';
import img1 from '../../../../assets/images/Ellipse 90.png';
import img2 from '../../../../assets/images/Ellipse 91.png';
import img3 from '../../../../assets/images/Ellipse 92.png';
import TestimonialCard from '../TestimonialCard';

const Testimonials = () => {
    const testisData=[
        {
            id:1,
            name:'Nash Patrik',
            icon:img1,
            designation: 'CEO, Nepal',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat.',
            rating: 4
        },
        {
            id:2,
            name:'Miriam Barron',
            icon:img2,
            designation: 'CEO, Bhutan',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat.',
            rating:4 
        },
        {
            id:3,
            name:'David Alison',
            icon:img3,
            designation: 'CEO, USA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat.',
            rating:4
        },
    ] 
    return (
        <div>
            <h2 className='mt-16 text-3xl font-bold text-center'>Testimonials</h2>
            <div className='mt-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    testisData.map(test =><TestimonialCard 
                    key={test.id}
                    test={test}
                    >

                    </TestimonialCard> )
                }
            </div>
        </div>
    );
};

export default Testimonials;