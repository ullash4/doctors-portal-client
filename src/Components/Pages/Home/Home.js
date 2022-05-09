import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Service from './Service';
import Care from './Care';
import DocAppointment from './DocAppointment';

const Home = () => {
    return (
        <div className="px-5 md:px-6 lg:px-12">
            <Banner />
            <Info />
            <Service />
            <Care />
            <DocAppointment />
        </div>
    );
};

export default Home;