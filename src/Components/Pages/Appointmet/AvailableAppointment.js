import { format } from 'date-fns';
import React, { useState , useEffect} from 'react';
import Services from './Services';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    
    return (
        <div>
            <h1 className="text-3xl text-center my-10"> Available Appointments On <span className='text-primary font-semibold'>{format(date, 'PP')}</span> </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service=><Services key={service._id} service={service}></Services>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;