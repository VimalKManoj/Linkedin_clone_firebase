import React from "react";
import "./sidebar.scss";
import { Avatar } from "@mui/material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="src\assets\background.jpg" alt="Cover" />
        <Avatar className="avatar" />
        <h2>Vimal K Manoj</h2>
        <h4>Job Description</h4>
        <div className="sidebar_stats">
          <div>
            <h5>120</h5>
            <h5>Profile Views</h5>
          </div>
          <div className="line"></div>
          <div>
            <h5>500</h5>
            <h5>Post Views</h5>
          </div>
        </div>
      </div>
      <div className="sidebar_bottom"></div>
    </div>
  );
}
