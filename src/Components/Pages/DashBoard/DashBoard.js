import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import PageTitle from "../../SharedPages/PageTitle";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../../Hooks/useAdmin"


const DashBoard = () => {
  
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)
  console.log(admin);

  return (
    <div className="drawer drawer-mobile mb-10">
      <PageTitle title="Dashboard"></PageTitle>
      <input id="dashboard-sideBar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
        <h1 className="text-5xl text-center font-black text-primary">
          Dashboard
        </h1>
        {/*  <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side rounded-lg shadow-xl">
        <label htmlFor="dashboard-sideBar" className="drawer-overlay"></label>
        <ul className="menu p-4 gap-2 overflow-y-auto w-48 bg-base-200 text-base-content">
          {/*   <!-- Sidebar content here --> */}
          <li>
            <Link to={"/dashboard"}>My Appointments</Link>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>My Review</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/users"}>All Users</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/addDoctor"}>Add Doctor</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manageDoctors"}>Manage Doctors</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
