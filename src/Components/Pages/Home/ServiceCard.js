import React from "react";

const ServiceCard = ({service}) => {
    const {data, img, text} = service;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={img}
            alt="dentalImg"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{data}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
