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
        <img src="/assets/background.jpg" alt="Cover" />
        <Avatar className="avatar" src={currentUser.profileLink} />
        <h2>{currentUser.name}</h2>
        <h4>{currentUser?.job}</h4>
        <div className="sidebar_stats">
          <div>{currentUser?.headline}</div>
        </div>
      </div>
      <div className="sidebar_bottom"></div>
    </div>
  );
}
