import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../SharedPages/Loading";
import CheckoutFrom from "./CheckoutFrom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const Payment = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["singleBooking", id], () =>
    fetch(`https://shielded-garden-48042.herokuapp.com/booking/${id}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-10 mx-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="card  bg-gray-200 shadow-xl my-10 ">
        <div class="card-body items-center text-center">
          <h2 class="card-title text-2xl font-bold">
            Hello <span className="text-primary">{data.patientName}</span> !
          </h2>
          <p className=" font-bold">
            Your Treatment :{" "}
            <span className="text-primary">{data.treatment}</span>
          </p>
          <p>Email : {data.patient}</p>
          <p>
            Your Appointment on{" "}
            <span className="text-primary">{data.date}</span> at{" "}
            <span className="text-primary">{data.slot}</span> . See you on time.
            Thanks
          </p>
          <div class="card-actions">
            <button class="btn btn-primary">Pay {data.price}</button>
          </div>
        </div>
      </div>
      <div class=" card bg-gray-200 shadow-xl p-10 text-white ">
        <Elements stripe={stripePromise}>
          <CheckoutFrom />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
