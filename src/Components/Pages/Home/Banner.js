import React from "react";
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'

const Banner = () => {
    
  return (
    <div style={{  
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="w-[594px] h-[355px]  rounded-lg  shadow-2xl" alt="bannerImg"
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6 pr-14">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
