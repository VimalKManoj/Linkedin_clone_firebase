import React from "react";
import "./index.scss";
import { Popover, Space } from "antd";
import { Logout } from "../../api/AuthAPI";
import HeaderIcons from "../Topbar/HeaderIcons";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const Content = ({ navigate }) => (
  <div className="popup">
    <div className="btn-btn">
      <button className="first-btn" onClick={() => navigate("/profile")}>
        <PersonIcon sx={{ marginRight: "12px", fontSize: "32px" }} />
        Profile
      </button>
    </div>
    <div className="btn-btn">
      <button onClick={Logout}>
        <LogoutIcon sx={{ marginRight: "12px", fontSize: "32px" }} />
        Logout
      </button>
    </div>
  </div>
);

const Popup = ({ currentUser }) => {
  const navigate = useNavigate();
  return (
    <Space wrap>
      <Popover content={<Content navigate={navigate} />} trigger="click">
        <button
        className="mobile-button"
          style={{
            padding: "0",
            backgroundColor: "transparent",
            fontFamily: "'Times New Roman'",
            border: "none",
          }}
        >
          <HeaderIcons
            avatar={currentUser.profileLink ? currentUser.profileLink : "no"}
            title="Me"
          />
        </button>
      </Popover>
    </Space>
  );
};

export default Popup;
