import React from "react";
import "./index.scss";
import SearchIcon from "@mui/icons-material/Search";
import HeaderIcons from "./HeaderIcons";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

export default function Topbar() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="src\assets\linkedin_icon.png" alt="" />

        <div className="search_container">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderIcons Icon={HomeOutlinedIcon} title="Home" />
        <HeaderIcons Icon={GroupOutlinedIcon} title="Network" />
        <HeaderIcons Icon={WorkOutlineOutlinedIcon} title="Jobs" />
        <HeaderIcons Icon={MessageOutlinedIcon} title="Messaging" />
        <HeaderIcons
          Icon={NotificationsActiveOutlinedIcon}
          title="Notification"
        />
        <HeaderIcons avatar="/Photo1.jpg" title="Me" />
      </div>
    </div>
  );
}
