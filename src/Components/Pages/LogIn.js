import React from "react";
import { Link } from "react-router-dom";
import SocialLogIn from "../SharedPages/SocialLogIn";

const LogIn = () => {
  return (
    <div>
      <div class="card w-96 mx-auto bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
        <h2 class="card-title">Log In</h2>
        <div class="form-control w-full max-w-xs">
            <form>
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                <button className="btn btn-link btn-sm">
                  Forget Password?
                </button>
              </label>
              <input type="submit" className="btn btn-accent btn-wide" value="Log In" />
            </form>
            <div className="mt-4">
              <p>
                New to Doctors Portal ?{" "}
                <Link className="text-primary" to={"/signup"}>
                  Create Account
                </Link>
              </p>
            </div>
            <div className="mt-4">
                <div class="divider">OR</div>
            </div>
            <div className="mt-4">
              
                <SocialLogIn />
            
            </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default LogIn;
