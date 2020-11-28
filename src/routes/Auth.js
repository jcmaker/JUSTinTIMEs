import React from "react";
import { authService, firebaseInstance } from "fbManager";
import AuthForm from "components/AuthForm";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "facebook") {
      provider = new firebaseInstance.auth.FacebookAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };

  return (
    <div className="auth-form">
      <AuthForm />
      <div className="auth-form__social">
        <button
          onClick={onSocialClick}
          name="google"
          className="auth-form__social_btn ggl"
        >
          Continue with Google
        </button>
        <button
          onClick={onSocialClick}
          name="facebook"
          className="auth-form__social_btn fcb"
        >
          Continue with Facebook
        </button>
        <button
          onClick={onSocialClick}
          name="github"
          className="auth-form__social_btn ghb"
        >
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
