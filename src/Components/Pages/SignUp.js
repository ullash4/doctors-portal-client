import React from "react";
import { Link } from "react-router-dom";
import SocialLogIn from "../SharedPages/SocialLogIn";

const SignUp = () => {
  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl my-10">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Sign Up</h2>
        <div className="form-control w-full max-w-xs">
          <form>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your password"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              className="btn btn-accent btn-wide mt-5"
              value="Sign Up"
            />
          </form>
          <div className="mt-4">
            <p>
              Already have account ?{" "}
              <Link className="text-primary" to={"/login"}>
                Log In
              </Link>
            </p>
          </div>
          <div className="mt-4">
            <div className="divider">OR</div>
          </div>
          <div className="mt-4">
            <SocialLogIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
