import React from "react";

const InfoCard = ({card, color}) => {
    const {data, img, text} = card;
    
    
  return (
    <div style={color}  className="card lg:card-side bg-primary p-5 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{data}</h2>
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
