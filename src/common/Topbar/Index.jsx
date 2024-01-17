import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import HeaderIcons from "./HeaderIcons";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import Popup from "../Popup";

export default function Topbar({ currentUser }) {
  let navigate = useNavigate();
  return (
    <div className="header">
      <div className="header_left">
        <img
          onClick={() => navigate("/home")}
          // src="public\assets\linkedin_icon.png"
          src="/assets/linkedin_icon.png"
          alt=""
        />

        <div className="search_container">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <button className="top-button" onClick={() => navigate("/home")}>
          <HeaderIcons Icon={HomeOutlinedIcon} title="Home" />
        </button>
        <HeaderIcons Icon={GroupOutlinedIcon} title="Network" />
        <HeaderIcons Icon={WorkOutlineOutlinedIcon} title="Jobs" />
        <HeaderIcons Icon={MessageOutlinedIcon} title="Messaging" />
        <HeaderIcons
          Icon={NotificationsActiveOutlinedIcon}
          title="Notification"
        />
        <Popup currentUser={currentUser} />
      </div>
    </div>
  );
}
