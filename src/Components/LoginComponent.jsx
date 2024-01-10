import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import "../sass/LoginComponent.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const LoginComponent = () => {
  const [credentails, setCredentials] = useState({});
  let navigate = useNavigate();

  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In Successfully!");
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Email/Password");
    }
  };

  // const signInWithGoogle = () => {
  //   let res = GoogleSignInAPI();
  // };

  return (
    <div className="login-container">
      <div className="image-container">
        <h3>
          Welcome to your <br></br>professional community
        </h3>
        <img src="src\assets\linkedin_logo.png" alt="Login Image" />
      </div>
      <div className="login-form">
        <img
          src="src\assets\LinkedinLogo.png"
          alt="Login Image"
          className="signlogo"
        />

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            placeholder="Username"
            required
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button onClick={login} type="submit">
          Login
        </button>

        <p>
          New to Linkedin?
          <span className="join" onClick={() => navigate("/register")}>
            Join Now
          </span>
        </p>
      </div>
    </div>
  );
};
