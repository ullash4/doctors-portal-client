import React from "react";
import { useQuery } from "react-query";
import Loading from "../../SharedPages/Loading";

const ManageDoctors = () => {

  const {
    isLoading,
    data: doctors,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if(isLoading){
      return <Loading></Loading>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">All docotors came here {doctors.length}</h1>
    </div>
  );
};

export default ManageDoctors;
