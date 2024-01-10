import React, { useState } from "react";
import { RegisterAPI } from "../api/AuthAPI";
import "../sass/LoginComponent.scss";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const [credentails, setCredentials] = useState({});
  let navigate = useNavigate();

  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Account Created!");
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Cannot create your Account");
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <h3>Make the most of your professional life</h3>
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
        <button onClick={register} type="submit">
          Agree & Join
        </button>

        <hr className="line" data-content="OR" />
        <div className="google">
          <GoogleButton
            onClick={() => {
              console.log("Google button clicked");
            }}
          />
        </div>
        <p>
          Already on Linkedin?
          <span className="join" onClick={() => navigate("/")}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterComponent;
