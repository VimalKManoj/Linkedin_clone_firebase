import React from "react";
import Topbar from "../common/Topbar/Index";
import Home from "../Pages/Home";
import Sidebar from "../common/Sidebar/Sidebar";

export default function HomeLayout() {
  return (
    <div>
      <Topbar />
      <div className="app_container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}
