import React from 'react';

const MessageSection = () => {
    return (
        <div className='mt-24'>
           <div className="hero min-h-screen bg-base-200 lg:w-full rounded-xl">
                <div className="hero-content text-center">
                    <div className="lg:max-w-md">
                        <h1 className="text-4xl font-bold">Let us handle your <br /> review, professionally.</h1>
                        <div className="card-body mt-16">

                            <div className='lg:flex justify-between'>
                                
                                <div className="form-control">
                                    <input type="text" placeholder="First Name" className="lg:-ml-5 mt-5 input input-bordered" />
                                </div>
                                <div className="form-control ">
                                    <input type="text" placeholder="Last Name" className="lg:ml-5 mt-5 input input-bordered" />
                                </div>
                            </div>
                            <div className='lg:flex justify-between'>
                                
                                <div className="form-control">
                                    <input type="text" placeholder="Email Address" className="lg:-ml-5 mt-5 input input-bordered" />
                                </div>
                                <div className="form-control ">
                                    <input type="text" placeholder="Phone Number" className="lg:ml-5 mt-5 input input-bordered" />
                                </div>
                            </div>
                            <textarea placeholder="Your Message" className="mt-5 textarea textarea-bordered textarea-xl w-full" ></textarea>
                            
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageSection;