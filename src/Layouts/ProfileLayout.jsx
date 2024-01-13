import React, { useMemo, useState } from "react";
import Topbar from "../common/Topbar/Index";
import Sidebar from "../common/Sidebar/Sidebar";
import { getCurrentUser } from "../api/FirestoreAPIs";
import Profile from "../Pages/Profile";

export default function ProfileLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Topbar currentUser={currentUser} />
      <div className="app_container">
        {/* <Sidebar currentUser={currentUser} /> */}
        <Profile currentUser={currentUser} />
      </div>
    </div>
  );
}
