import React from 'react';
import Banner from './Banner/Banner';
import ServiceCard from './ServiceCard/ServiceCard';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <ServiceCard></ServiceCard>
        </div>
    );
};

export default Home;