import React from "react";
import { useQuery } from "react-query";
import Loading from "../../SharedPages/Loading";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const {
    isLoading,
    data: doctors,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://shielded-garden-48042.herokuapp.com/doctor", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">
        All docotors came here {doctors.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Actions</th>
            </tr>
          </thead>

          {doctors.map((doctor, index) => (
            <DoctorRow
              key={doctor._id}
              doctor={doctor}
              index={index}
              refetch={refetch}
            ></DoctorRow>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
