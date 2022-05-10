import React from "react";

const Services = ({ service }) => {
    const {name, slots} = service;

    let space;
    if(slots.length < 3){
        space="Only few space Available"
    }
    if(slots.length >= 3){
        space= "Spaces Available"
    }
    if(slots.length === 0){
        space= "No Available"
    }
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-primary">{name}</h2>
        <p>{slots}</p>
        <p>{slots.length} {space}</p>
        <div class="card-actions">
            {slots.length ? <button class="btn btn-primary">Book Appointment</button> : <button class="btn btn-accent" disabled>No Appointment Available</button>}
        </div>
      </div>
    </div>
  );
};

export default Services;