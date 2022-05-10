import React from "react";
import treatment from "../../../assets/images/treatment.png";

const Care = () => {
  return (
    <div className="my-10">
      <div className="hero min-h-screen md:px-12 lg:px-24 ">
        <div className="hero-content flex-col lg:flex-row lg:gap-48">
          <img
            src={treatment}
            className="w-[458px] h-[576px] rounded-lg shadow-2xl"
            alt="hero"
          />
          <div>
            <h1 className="text-5xl font-bold ">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
