import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";

const SocialLogIn = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };

  const [token] = useToken(user)

  let from = location.state?.from?.pathname || '/'

  if (token) {
    navigate(from, {replace: true})
  }

  return (
    <div>
      <button
        onClick={handleSignInWithGoogle}
        className="btn btn-block mb-5  btn-outline"
      >
        Continue with Google
      </button>
      <button className="btn btn-block  btn-outline">
        Continue with Github
      </button>
    </div>
  );
};

export default SocialLogIn;
