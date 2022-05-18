import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../SharedPages/Loading";

const Payment = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery("singleBooking", () =>
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(data);
  return (
    <div>
      <h1 className="text-5xl font-bold text-primary">
        Please Make Payment for {id}
      </h1>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
          <h2 class="card-title">{data.patientName}</h2>
          <p>{data.patient}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Pay {data.price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
