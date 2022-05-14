import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyAppointment = () => {
    const [appointment, setAppointment] = useState([])
    const [user] = useAuthState(auth)
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setAppointment(data)
        })
        }
    },[user])
    return (
        <div>
            <h1>My appointment {appointment.length}</h1>
            <h1>My appointment {user.email}</h1>
        </div>
    );
};

export default MyAppointment;