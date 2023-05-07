import React from 'react';
import Anti from '../../../../assets/icons/Group 1373.png';
import Hair from '../../../../assets/icons/Group 1372.png';
import Skin from '../../../../assets/icons/Group 1374.png';
import InfoCard from './InfoCard';


const ServiceCard = () => {
    const cardsData =[
        {
            id: 1,
            name: 'Anti Age Face Treatment',
            icon: Anti,
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            price: 199
          },
          {
            id:2,
            name: 'Hair Color & Styling',
            icon: Hair,
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
            price: 99
          },
          {
            _id: 3,
            name: 'Skin Care Treatment',
            icon: Skin,
            description: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
            price: 299
          }
    ]
    return (
        <div className='mt-28'>
            <h1 className='text-3xl font-bold text-center '>Our Awesome <span className='text-primary'>Services</span></h1>
            <div className='mt-16 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    cardsData.map(card=> <InfoCard
                    key={card.id}
                    card={card}
                    >

                    </InfoCard>)
                }
            </div>
            <div className="mt-8 card-actions justify-center">
                <button className="btn btn-primary">Explore More</button>
            </div>
        </div>
    );
};

export default ServiceCard;