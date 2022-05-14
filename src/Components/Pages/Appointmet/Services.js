import React from "react";

const Services = ({ service, setTreatment }) => {
  const { name, slots } = service;

  let space;
  if (slots.length < 3) {
    space = "Only few space Available";
  }
  if (slots.length >= 3) {
    space = "Spaces Available";
  }
  if (slots.length === 0) {
    space = "No Available";
  }
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary">{name}</h2>
        <p>{slots.slice(0,3)}</p>
        <p>
          {slots.length} {space}
        </p>
        <div className="card-actions">
          {slots.length ? (
            <label
              for="my-modal"
              className="btn btn-primary"
              onClick={() => setTreatment(service)}
            >
              Book Appointment
            </label>
          ) : (
            <button className="btn btn-accent" disabled>
              No Appointment Available
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
