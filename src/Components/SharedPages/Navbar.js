import React from "react";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
  const menuItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/appointment"}>Appointment</NavLink>
      </li>
      <li>
        <NavLink to={"/reviews"}>Reviews</NavLink>
      </li>
      <li>
        <NavLink to={"/contactus"}>Contact us</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/dashboard"}>DashBoard</NavLink>
        </li>
      )}
      {user ? (
        <li>
          <button onClick={handleSignOut}>Sign Out</button>
        </li>
      ) : (
        <li>
          <Link to={"/login"}>Log In</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu gap-2 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </Link>
      </div>
      <div
        className={`hidden  lg:flex ${user ? "navbar-center" : "navbar-end"}`}
      >
        <ul className="menu gap-2 menu-horizontal  p-0">{menuItems}</ul>
      </div>
      <div className="w-48 ml-40 lg:hidden block">
        <label
          htmlFor="dashboard-sideBar"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
    </div>
  );
};

export default Navbar;
