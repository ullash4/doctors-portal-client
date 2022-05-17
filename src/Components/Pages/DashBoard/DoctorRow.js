import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch }) => {
  const { name, img, email, specialty, _id } = doctor;

  const handleDelete = (_id) => {
    const sure = window.confirm("Are you sure?");

    if (sure) {
      fetch(`http://localhost:5000/doctor/${_id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            refetch();
            toast.success(`Doctor ${name} is now deleted`);
          }
        });
    }
  };

  return (
    <tbody>
      <tr className="hover">
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={
                    img ||
                    "https://images.pexels.com/photos/5875794/pexels-photo-5875794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  }
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{name || "Normal guy"}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>{specialty}hh</td>
        <td>
          {" "}
          <button
            onClick={() => handleDelete(_id)}
            class="btn btn-error btn-xs"
          >
            Delete
          </button>{" "}
        </td>
      </tr>
    </tbody>
  );
};

export default DoctorRow;
