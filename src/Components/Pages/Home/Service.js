import React from "react";
import ServiceCard from "./ServiceCard";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";

const Service = () => {
  const services = [
    {
      _id: 1,
      background: "linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)",
    data: "Fluoride Treatment",
    text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: fluoride
  },
  {
    _id: 2,
    background: "#3A4256",
    data: "Cavity Filling",
    text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: cavity,
  },
  {
    _id: 3,
    background: "linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)",
    data: "Teeth Whitening",
    text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: whitening,
  }
  ] 

  return (
    <div className="mt-16 mb-7">
        <h1 className="text-primary text-center text-2xl font-semibold">Our Services</h1>
        <h1 className="text-center text-4xl font-bold">Services We Provide</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
        {
          services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Service;
