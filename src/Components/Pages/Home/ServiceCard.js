import React from "react";

const ServiceCard = ({ service }) => {
  const { data, img, text } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="dentalImg" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{data}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
