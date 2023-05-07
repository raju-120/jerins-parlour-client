import React from 'react';
import banner from '../../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} alt='' className="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                        <p className="py-6">
                            At the Jerins-Parlour, we have confidence in excellence 
                            with a heart. We have made a salon that offers the most noteworthy
                             quality hair benefits in a setting that is more advantageous for
                              the earth, our visitors, and our staff.
                        </p>
                        <button className="btn btn-primary">Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;