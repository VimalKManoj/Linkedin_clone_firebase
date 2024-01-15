import React, { useMemo, useState } from "react";
import "./index.scss";
import { Avatar } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import AboutEdit from "../AboutEdit/AboutEdit";
import JobEdit from "../EducationEdit/EducationEdit";
import { useLocation } from "react-router-dom";
import { getSingleUser, getSingleStatus } from "../../api/FirestoreAPIs";
import NearMeIcon from "@mui/icons-material/NearMe";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

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
              <p className="place">
                {(Object.values(currentProfile).length === 0
                  ? currentUser
                  : currentProfile
                )?.place &&
                  (Object.values(currentProfile).length === 0
                    ? currentUser
                    : currentProfile
                  )?.job && (
                    <>
                      <NearMeIcon
                        sx={{
                          marginRight: ".6rem",
                          height: "18px",
                          width: "18px",
                          color: "#2172ed",
                        }}
                      />
                      <p className="name-place">
                        {Object.values(currentProfile).length === 0
                          ? currentUser.place
                          : currentProfile?.place}
                      </p>
                      {/* <p className="bio-dob">
                        {Object.values(currentProfile).length === 0
                          ? currentUser.job
                          : currentProfile?.job}
                      </p> */}
                    </>
                  )}
                {/* <NearMeIcon
                  sx={{
                    marginRight: ".6rem",
                    height: "18px",
                    width: "18px",
                    color: "#2172ed",
                  }}
                  // fontSize="small"
                />
                {Object.values(currentProfile).length === 0
                  ? currentUser.place
                  : currentProfile?.place} */}
              </p>
              {Object.values(currentProfile).length === 0 && (
                <>
                  <button
                    type="submit"
                    className="edit-profile-btn"
                    onClick={() => setModalOpen(true)}
                  >
                    <EditOutlinedIcon /> EDIT PROFILE
                  </button>
                  <ProfileEdit
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    currentUser={currentUser}
                  />
                </>
              )}
            </div>
            <p className="job-title">
              {Object.values(currentProfile).length === 0
                ? currentUser.job
                : currentProfile?.job}
            </p>

            <p className="headline">
              {Object.values(currentProfile).length === 0
                ? currentUser.headline
                : currentProfile?.headline}
            </p>
          </div>
        </div>
      </div>
      <div className="profile_inputcontainer">
        <div className="about-job">
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
              <p className="bio-dob">
                <span>Date of Birth:</span>
                {currentUser.birthdate}
              </p>
              <p className="bio-dob">{currentUser.bio}</p>
            </>
          ) : (
            <p className="bio-dob">Add About Info</p>
          )
        ) : currentProfile?.birthdate ? (
          <>
            <p className="bio-dob">
              <span>Date of Birth:</span>
              {currentProfile.birthdate}
            </p>
            <p className="bio-dob">{currentProfile.bio}</p>
          </>
        ) : (
          <p className="bio-dob">About not found</p>
        )}
      </div>

      <div className="profile_inputcontainer">
        <div className="about-job">
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
                    <div className="head">
                      <DoubleArrowIcon
                        fontSize="large"
                        sx={{ color: "#2172ed" }}
                      />
                      <strong>{experience.jobTitle}</strong>
                    </div>
                    <span className="list-company">{experience.company}</span>
                    <span className="list-location">{experience.location}</span>
                    <br />
                    <span className="jobdate">
                      {experience.startDate} - {experience.endDate}
                    </span>
                    <br />
                    <span className="jobdesc">{experience.description}</span>
                  </li>
                ))
              ) : (
                <li className="name-place">No experience added</li>
              )
            ) : currentProfile.experiences &&
              currentProfile.experiences.length > 0 ? (
              currentProfile.experiences.map((experience, index) => (
                <li key={index}>
                  <div className="head">
                    <DoubleArrowIcon
                      fontSize="large"
                      sx={{ color: "#2172ed" }}
                    />
                    <strong>{experience.jobTitle}</strong>
                  </div>
                  <span className="list-company">{experience.company}</span>
                  <span className="list-location">{experience.location}</span>
                  <br />
                  <span className="jobdate">
                    {experience.startDate} - {experience.endDate}
                  </span>
                  <br />
                  <span className="jobdesc">{experience.description}</span>
                </li>
              ))
            ) : (
              <li className="name-place">No experience added</li>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};
