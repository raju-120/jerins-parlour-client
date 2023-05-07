import React from 'react';
import photo from '../../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const ProfessionalSection = () => {
    return (
        <div className="mt-14 hero min-h-screen bg-base-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src={photo} alt='' className="lg:max-w-2xl rounded-lg shadow-2xl" />
                
                <div className='card  w-1/2 lg:w-full '>
                    <h1 className="text-3xl font-bold mb-5">
                        Let us handle your screen <span className='text-primary'>Professionally</span>.
                    </h1>
                    <p className="py-6 mt-6 ">Spa services can include massage, along with spa treatments such as mud baths. High-end spa/salons may provide packages which allow people to purchase a bundle of services for an event such as a wedding, with some spas allowing wedding parties to take over the salon for a day to get an array of beauty services before the wedding.</p>
                    <div className='mt-10 flex justify-evenly'>
                        <div>
                            <h1 className='text-5xl font-bold text-primary'>500+</h1>
                            <p className='mt-2'>Happy Customer</p>
                        </div>
                        <div>
                            <h1 className='text-5xl font-bold text-primary'>16+</h1>
                            <p className='mt-2'>Total Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalSection;