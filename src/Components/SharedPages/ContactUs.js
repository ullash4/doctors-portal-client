import React from "react";
import appointment from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      className="my-5 pb-20 pt-10 "
      style={{
        backgroundImage: `url(${appointment})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl text-primary text-center">Contact us</h1>
      <h1 className="text-4xl text-white text-center mb-5">
        Stay connected with usContact us
      </h1>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input
          type="text"
          placeholder="Email Address"
          className="input w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-md"
        />
        <textarea
          className="textarea w-full max-w-md"
          placeholder="Your message"
          rows={6}
        ></textarea>
        <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
