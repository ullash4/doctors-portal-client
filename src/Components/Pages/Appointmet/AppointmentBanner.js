import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    
    const [selected, setSelected] = useState(new Date())

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
    return (
        <div style={{  
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-32">
              <img
                src={chair}
                className="w-[594px] h-[355px]  rounded-lg  shadow-2xl" alt="bannerImg"
              />
              <div>
              <DayPicker 
               mode="single"
               selected={selected}
               onSelect={setSelected}
               footer={footer} 
               />
              </div>
            </div>
          </div>
        </div>
    );
};

export default AppointmentBanner;