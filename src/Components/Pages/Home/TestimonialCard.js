import React from 'react';

const TestimonialCard = ({user}) => {
    const {text, img, name, location} = user;
    return (
        <div className="shadow-lg p-5 rounded-xl">
            <h1 className="text-justify mb-5">{text}</h1>
            <div className="flex  items-center">
                <img className="w-[64px] h-[64px] rounded-full border-solid border-4 border-primary" src={img} alt="" />
                <div className='ml-5'>
                <h1 className="font-semibold">{name}</h1>
                <h1>{location}</h1>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;