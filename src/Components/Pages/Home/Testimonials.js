import React from "react";
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import TestimonialCard from "./TestimonialCard";
const Testimonials = () => {
    const users =[
        {
            _id: 1,
            text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "William Shecksper",
            location: "Los Angles",
            img: people1
        },
        {
            _id: 2,
            text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "William Shecksper",
            location: "Los Angles",
            img: people1
        },
        {
            _id: 3,
            text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "William Shecksper",
            location: "Los Angles",
            img: people1
        }
    ]
  return (
    <section className="my-5">
      <div className="flex  justify-between items-center mb-5">
        <div>
          <h1 className="text-3xl text-primary">Testimonial</h1>
          <h1 className="text-5xl">What Our Patients Says</h1>
        </div>
        <div>
            <img className="w-[192px] h-[156px] hidden md:block" src={quote} alt="" />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {
        users.map(user=><TestimonialCard key={user._id} user={user}></TestimonialCard>)
    }
      </div>
    </section>
  );
};

export default Testimonials;
