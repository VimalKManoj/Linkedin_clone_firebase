import React, { useState } from "react";
import "./index.scss";
// import ProfileEdit from "../ProfileEdit/ProfileEdit";
import { Avatar } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ProfileEdit from "../ProfileEdit/ProfileEdit";

export const ProfileCard = ({ currentUser, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="profile">
      <div className="profile_inputcontainer">
        <img src="src\assets\background.jpg" />
        <div className="profile-info">
          <div>
            <Avatar className="profile-pic" />
          </div>
          <div className="profile-text-info">
            <div className="name-place">
              <p>{currentUser.name}</p>
              <button type="submit" onClick={() => setModalOpen(true)}>
                Edit Profile
              </button>
              <ProfileEdit
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                currentUser={currentUser}
                // status={status}
                // setStatus={setStatus}
                // sendStatus={sendStatus}
              />
            </div>
            <p>Place</p>
            <p>Headline</p>
          </div>
        </div>
      </div>
      <div className="profile_inputcontainer">
        <p>About</p>
        <p>About content</p>
      </div>

      <div className="profile_inputcontainer">
        <p>Education</p>
        <p>Education Details</p>
      </div>
    </div>
  );
};
