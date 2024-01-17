import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import "../sass/LoginComponent.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import RegisterModal from "../common/RegisterModal";

export const LoginComponent = () => {
  const [credentails, setCredentials] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  let navigate = useNavigate();

  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In Successfully!");
      navigate("/home");
      localStorage.setItem("userEmail", res.user.email);
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
        <img src="public\assets\linkedin_logo.png" alt="Login Image" />
      </div>
      <div className="login-form">
        <img
          src="public\assets\LinkedinLogo.png"
          alt="Login Image"
          className="signlogo"
        />

        <div className="auth-inputs">
          <p>Welcome back! Please login into your account.</p>
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            placeholder="Email"
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
          <button onClick={login} type="submit">
            Login
          </button>
        </div>

        <div className="line-sign"></div>

        <div className="sign-in">
          <p>Don't have an account?</p>
          {/* <button onClick={() => navigate("/register")}>Create Account</button> */}

          <button type="submit" onClick={() => setModalOpen(true)}>
            Create account
          </button>
          <RegisterModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            // status={status}
            // setStatus={setStatus}
            // sendStatus={sendStatus}
          />
        </div>
      </div>
    </div>
  );
};
