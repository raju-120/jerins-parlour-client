import React from 'react';
import Banner from './Banner/Banner';
import ServiceCard from './ServiceCard/ServiceCard';
import ProfessionalSection from './ProfessionalSection/ProfessionalSection';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <ServiceCard></ServiceCard>
            <ProfessionalSection></ProfessionalSection>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;