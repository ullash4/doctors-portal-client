import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className='px-12'>
            <AppointmentBanner selected={date} setSelected={setDate} />
            <AvailableAppointment date={date} />
        </div>
    );
};

export default Appointment;