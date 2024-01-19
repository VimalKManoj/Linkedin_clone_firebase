import React, { useEffect, useState } from "react";
import HomeComponent from "../Components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import Loader from "../common/Loader";

export default function Home({ currentUser }) {
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
  return loading ? <Loader /> : <HomeComponent currentUser={currentUser} />;
  // return <HomeComponent currentUser={currentUser} />;
}
