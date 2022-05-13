import { format } from "date-fns";
import React, { useRef } from "react";

const Modal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;

  const slotRef = useRef("");
  const emailRef = useRef("");
  const nameRef = useRef("");
  const numberRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const slot = slotRef.current.value;
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const number = numberRef.current.value;
    console.log(slot, email, name, number);
    setTreatment(null);
  };

  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-primary text-center">{name}</h3>
          <form
            onSubmit={handleSubmit}
            className="my-3 grid grid-cols-1 justify-items-center"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              readOnly
              className="input input-bordered w-full max-w-xs my-2"
            />
            <select
              ref={slotRef}
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              ref={nameRef}
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              ref={emailRef}
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              ref={numberRef}
              type="number"
              placeholder="Your Number"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input type="submit" className="btn btn-accent" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
