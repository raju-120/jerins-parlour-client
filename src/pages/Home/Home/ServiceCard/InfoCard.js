import React from 'react';

const InfoCard = ({card}) => {
    const {name,icon,description,price} = card;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className=" rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-xl">{name}</h2>
                <p className='text-primary'>Price: <strong>$ {price}</strong> </p>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;