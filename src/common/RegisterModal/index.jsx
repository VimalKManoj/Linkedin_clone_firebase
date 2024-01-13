import React, { useState } from "react";
import "./index.scss";
import { Modal } from "antd";
import { RegisterAPI } from "../../api/AuthAPI";
import { userData } from "../../api/FirestoreAPIs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterModal = ({ modalOpen, setModalOpen }) => {
  const [open, setOpen] = useState(false);
  const [credentails, setCredentials] = useState({});
  let navigate = useNavigate();

  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Account Created!");
      navigate("/home");
      localStorage.setItem("userEmail", res.user.email);
      userData({ name: credentails.name, email: credentails.email });
      setModalOpen(false);
    } catch (err) {
      console.log(err);
      toast.error("Cannot create your Account");
    }
  };

  return (
    <>
      {/* <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal of 1000px width
      </Button> */}
      <Modal
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={600}
      >
        <div className="register-modal-container">
          <img
            src="src\assets\linkedin_icon.png"
            alt="Login Image"
            className="registerlogo"
          />

          <div className="auth-inputs">
            <p
              style={{ fontSize: "1.3rem", color: "black", fontWeight: "900" }}
            >
              Create your account
            </p>
            <input
              onChange={(event) =>
                setCredentials({ ...credentails, name: event.target.value })
              }
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              onChange={(event) =>
                setCredentials({ ...credentails, email: event.target.value })
              }
              type="email"
              placeholder="Email Address"
              required
            />
            <input
              onChange={(event) =>
                setCredentials({ ...credentails, password: event.target.value })
              }
              type="password"
              placeholder="Password (6 or more characters)"
              required
            />

            <button onClick={register} type="submit" className="register-btn">
              Agree & Join
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RegisterModal;
