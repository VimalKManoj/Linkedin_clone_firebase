import React, { useMemo, useState } from "react";
import "./index.scss";
import { Avatar } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import AboutEdit from "../AboutEdit/AboutEdit";
import JobEdit from "../EducationEdit/EducationEdit";
import { useLocation } from "react-router-dom";
import { getSingleUser, getSingleStatus } from "../../api/FirestoreAPIs";

export const ProfileCard = ({ currentUser }) => {
  let location = useLocation();
  const [experiences, setExperiences] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);

  const [allStatuses, setAllStatus] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});

  useMemo(() => {
    if (location?.state?.id) {
      getSingleStatus(setAllStatus, location?.state?.id);
    }

    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location?.state?.email);
    }
  }, []);

  const handleAddExperience = (experienceData) => {
    setExperiences([...experiences, experienceData]);
  };

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
              <p>
                {Object.values(currentProfile).length === 0
                  ? currentUser.name
                  : currentProfile?.name}
              </p>
              {Object.values(currentProfile).length === 0 && (
                <>
                  <button type="submit" onClick={() => setModalOpen(true)}>
                    <EditOutlinedIcon /> Edit Profile
                  </button>
                  <ProfileEdit
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    currentUser={currentUser}
                  />
                </>
              )}
            </div>
            <p>
              {Object.values(currentProfile).length === 0
                ? currentUser.job
                : currentProfile?.job}
            </p>
            <p>
              {Object.values(currentProfile).length === 0
                ? currentUser.place
                : currentProfile?.place}
            </p>
            <p>
              {Object.values(currentProfile).length === 0
                ? currentUser.headline
                : currentProfile?.headline}
            </p>
          </div>
        </div>
      </div>
      <div className="profile_inputcontainer">
        <div className="name-place">
          <p>About</p>
          {Object.values(currentProfile).length === 0 && (
            <>
              {" "}
              <button onClick={() => setModalOpen2(true)}>
                <EditOutlinedIcon />
              </button>
              <AboutEdit
                modalOpen2={modalOpen2}
                setModalOpen2={setModalOpen2}
                currentUser={currentUser}
              />
            </>
          )}
        </div>
        {Object.values(currentProfile).length === 0 ? (
          currentUser.birthdate ? (
            <>
              <p>{currentUser.birthdate}</p>
              <p>{currentUser.bio}</p>
            </>
          ) : (
            <p>About content</p>
          )
        ) : currentProfile?.birthdate ? (
          <>
            <p>{currentProfile.birthdate}</p>
            <p>{currentProfile.bio}</p>
          </>
        ) : (
          <p>About content</p>
        )}
      </div>

      <div className="profile_inputcontainer">
        <div className="name-place">
          <p>Job and Experience</p>
          {Object.values(currentProfile).length === 0 && (
            <>
              <button onClick={() => setModalOpen3(true)}>
                <EditOutlinedIcon />
              </button>
              <JobEdit
                modalOpen3={modalOpen3}
                setModalOpen3={setModalOpen3}
                currentUser={currentUser}
                onAddExperience={handleAddExperience}
              />
            </>
          )}
        </div>
        <section className="experience-section">
          <ul>
            {Object.values(currentProfile).length === 0 ? (
              currentUser.experiences && currentUser.experiences.length > 0 ? (
                currentUser.experiences.map((experience, index) => (
                  <li key={index}>
                    <strong>{experience.jobTitle}</strong> at{" "}
                    {experience.company}, {experience.location}
                    <br />
                    {experience.startDate} - {experience.endDate}
                    <br />
                    {experience.description}
                  </li>
                ))
              ) : (
                <li>No experience</li>
              )
            ) : currentProfile.experiences &&
              currentProfile.experiences.length > 0 ? (
              currentProfile.experiences.map((experience, index) => (
                <li key={index}>
                  <strong>{experience.jobTitle}</strong> at {experience.company}
                  , {experience.location}
                  <br />
                  {experience.startDate} - {experience.endDate}
                  <br />
                  {experience.description}
                </li>
              ))
            ) : (
              <li>No experience</li>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};
