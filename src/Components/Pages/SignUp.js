import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from "../SharedPages/SocialLogIn";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../SharedPages/Loading";
import useToken from "../../Hooks/useToken";


const SignUp = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    sError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const [token] = useToken(user)

  let from = location.state?.from?.pathname || '/'

  useEffect(()=>{
    if(token){
      navigate(from, {replace: true})
    }
  },[from, navigate, token])

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async(data) => {
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({displayName: data.name})
    
  }

  if(loading || updating){
    return <Loading></Loading>
  }

  let errorMessage;

  if(sError || error){
    errorMessage= <p className="text-red-500"><small>{error.message || sError.message}</small></p>
  }

  


  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl my-10">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">Sign Up</h2>
        <div className="form-control w-full max-w-xs">

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please Give a valid Email",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 5,
                    message: "password must be 5 character or long",
                  },
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {errorMessage}
            <input className="btn btn-wide" value="sign up" type="submit" />
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
