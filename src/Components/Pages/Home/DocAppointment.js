import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png'

const DocAppointment = () => {
    return (
        <div  className="my-10">
      <div style={{  
            backgroundImage: `url(${appointment})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
        <div className="flex sm:flex-col lg:flex-row  justify-center items-center">
          <img
            src={doctor}
            className="w-[606px] h-[636px] mt-[-120px] hidden lg:block"
            alt="hero"
          />
          <div className="p-10 text-white">
            <h1 className="text-xl text-primary mb-5 font-bold ">
            Appointment
            </h1>
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

export default DocAppointment;