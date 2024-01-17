import React, { useState, useEffect } from "react";
import "./sidebar.scss";

const SidebarProfile = ({ currentUser }) => {
  const initialCount = () => Number(window.localStorage.getItem("count"));
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    // Save count to localStorage whenever it changes
    window.localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    // Increment count every 1000 milliseconds (1 second)
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 15000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="sidebar_profile">
      <div className="sidebar_top_profile">
        <h2>YOUR DASHBOARD</h2>
        <hr className="hr" />
        <div className="sidebar_stats_profile">
          <h2>{count}</h2>
          <h4>Profile views</h4>
        </div>
        <div className="sidebar_stats_profile">
          <h2>20</h2>
          <h4>Post views</h4>
        </div>
        <div className="sidebar_stats_profile">
          <h2>9</h2>
          <h4>Search appearances</h4>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
