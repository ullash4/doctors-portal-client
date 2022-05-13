import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocialLogIn = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };

  if (user) {
    navigate("/");
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
