import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="drawer drawer-mobile mb-10">
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
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content">
          {/*   <!-- Sidebar content here --> */}
          <li>
            <Link to={"/dashboard"}>My Appointments</Link>
          </li>
          <li>
            <Link to={"/dashboard/review"}>My Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
