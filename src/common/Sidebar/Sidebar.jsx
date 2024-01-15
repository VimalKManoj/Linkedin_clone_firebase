import React from "react";
import "./sidebar.scss";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ currentUser }) {
  let navigate = useNavigate();
  return (
    <div className="sidebar">
      <div
        className="sidebar_top"
        onClick={() => {
          navigate("/profile");
        }}
      >
        <img src="src\assets\background.jpg" alt="Cover" />
        <Avatar className="avatar" />
        <h2>{currentUser.name}</h2>
        <h4>{currentUser?.job}</h4>
        <div className="sidebar_stats">
          <div>
            {currentUser?.headline}
            {/* <h5>120</h5>
            <h5>Profile Views</h5>
          </div>
          <div className="line"></div>
          <div>
            <h5>500</h5>
            <h5>Post Views</h5> */}
          </div>
        </div>
      </div>
      <div className="sidebar_bottom"></div>
    </div>
  );
}
