import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Service from './Service';
import Care from './Care';
import DocAppointment from './DocAppointment';
import Testimonials from './Testimonials';
import ContactUs from '../../SharedPages/ContactUs';

const Home = () => {
    return (
        <div>
            <div className="px-5 md:px-6 lg:px-12 ">

            <Banner />
            <Info />
            <Service />
            <Care />
            </div>
            <DocAppointment />
            <div className="px-5 md:px-6 lg:px-12 ">
            <Testimonials />
            </div>
            <ContactUs />
        </div>
    );
};

export default Home;