import { format } from "date-fns";
import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const Modal = ({ treatment, date, setTreatment }) => {
  const [user] = useAuthState(auth);
  const { _id, name, slots, price } = treatment;

  const slotRef = useRef("");

  const numberRef = useRef("");

  const formatedDate = format(date, "PP");

  const handleSubmit = (e) => {
    e.preventDefault();
    const slot = slotRef.current.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formatedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone: numberRef.current.value,
    };

    fetch("https://shielded-garden-48042.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Your appointment at ${formatedDate} on ${slot}`);
        } else {
          toast.error(
            `You have already an appointment at ${data.booking?.date} on ${data.booking?.slot}`
          );
        }
        // to close modal
        setTreatment(null);
      });
  };

  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal"
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
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              disabled
              value={user.displayName}
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="email"
              disabled
              value={user.email}
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
