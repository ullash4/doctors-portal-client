import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {
    const card1 = {
        background: 'linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)',
        data: "Opening Hours",
        text: "Lorem Ipsum is simply dummy text of the pri",
        img: clock
    }
    const card2 = {
        background: '#3A4256',
        data: "Visit our location",
        text: "Brooklyn, NY 10036, United States",
        img: marker
    }
    const card3 = {
        background: 'linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)',
        data: "Contact us now",
        text: "+000 123 456789",
        img: phone
    }

    const color1={
        background: 'linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)'
    }
    const color2={
        background: '#3A4256'
    }
    const color3={
        background: 'linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)'
    }
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 py-5">
            <InfoCard color={color1} card={card1}></InfoCard>
            <InfoCard color={color2} card={card2}></InfoCard>
            <InfoCard color={color3} card={card3}></InfoCard>
            
            
        </div>
    );
};

export default Info;