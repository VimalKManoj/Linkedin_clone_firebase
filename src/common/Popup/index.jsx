import React from "react";
import { Popover, Space } from "antd";
import { Logout } from "../../api/AuthAPI";
import HeaderIcons from "../Topbar/HeaderIcons";
import { useNavigate } from "react-router-dom";

const Content = ({ navigate }) => (
  <div>
    <button
      style={{
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
      }}
      onClick={() => navigate("/profile")}
    >
      Profile
    </button>
    <p onClick={Logout} style={{ cursor: "pointer" }}>
      Logout
    </p>
  </div>
);

const Popup = () => {
  const navigate = useNavigate();
  return (
    <Space wrap>
      <Popover content={<Content navigate={navigate} />} trigger="click">
        <button
          style={{
            backgroundColor: "transparent",
            fontFamily: "'Times New Roman'",
            border: "none",
          }}
        >
          <HeaderIcons avatar="/Photo1.jpg" title="Me" />
        </button>
      </Popover>
    </Space>
  );
};

export default Popup;
