import React, { useMemo, useState, useEffect } from "react";
import Topbar from "../common/Topbar/Index";
import Home from "../Pages/Home";
import Sidebar from "../common/Sidebar/Sidebar";
import { getCurrentUser } from "../api/FirestoreAPIs";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import Loader from "../common/Loader";

export default function HomeLayout() {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);
  //    <HomeComponent currentUser={currentUser} />;
  // }

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div>
      <Topbar currentUser={currentUser} />
      <div className="app_container">
        <Sidebar currentUser={currentUser} />
        <Home currentUser={currentUser} />
      </div>
    </div>
  );
}
