import React, { useEffect, useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import HeaderIcons from "./HeaderIcons";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import Popup from "../Popup";
import SearchComponent from "../Search/SearchComponent";
import { getAllUsers } from "../../api/FirestoreAPIs";

export default function Topbar({ currentUser }) {
  const [searchInput, setSearchInput] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [searchedUser, setSearchUser] = useState([]);
  let navigate = useNavigate();

  const handleSearch = () => {
    if (searchInput !== "") {
      let searched = allUsers.filter((user) => {
        return Object.values(user.name)
          .join("")
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      });

      setSearchUser(searched);
    } else {
      setSearchUser(allUsers);
    }
  };
  // console.log(allUsers.map((user) => user.name));
  useEffect(() => {
    getAllUsers(setAllUsers);
  }, []);

  useEffect(() => {
    let debounced = setTimeout(() => {
      handleSearch();
    }, 1000);

    return () => clearTimeout(debounced);
  }, [searchInput]);

  return (
    <div className="header">
      <div className="header_left">
        <img
          onClick={() => {
            navigate("/home");
          }}
          // src="public\assets\linkedin_icon.png"
          src="/assets/linkedin_icon.png"
          alt=""
        />

        <SearchComponent
          setSearchInput={setSearchInput}
          searchInput={searchInput}
          allUsers={allUsers}
          searchedUser={searchedUser}
        />
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
