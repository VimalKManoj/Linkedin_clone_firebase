import React, { useEffect, useMemo, useState } from "react";
import "./index.scss";
import { Avatar } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import AboutEdit from "../AboutEdit/AboutEdit";
import JobEdit from "../EducationEdit/EducationEdit";
import { useLocation } from "react-router-dom";
import {
  getSingleUser,
  getSingleStatus,
  editProfile,
} from "../../api/FirestoreAPIs";
import NearMeIcon from "@mui/icons-material/NearMe";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { uploadImage } from "../../api/ImageAPI";
import ProfilePicEdit from "../ProfilePicEdit/ProfilePicEdit";

export const ProfileCard = ({ currentUser }) => {
  let location = useLocation();
  const [experiences, setExperiences] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen4, setModalOpen4] = useState(false);
  const [currentImage, setCurrentImage] = useState({});
  const [progress, setProgress] = useState(0);
  const [allStatuses, setAllStatus] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});
  // const [profileLink, setProfileLink] = useState("");

  const getImage = (event) => {
    setCurrentImage(event.target.files[0]);
  };

  const imageUpload = () => {
    uploadImage(
      currentImage,
      currentUser.id,
      setModalOpen4,
      setProgress,
      setCurrentImage
    );
  };

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

  // useEffect(() => {
  //   editProfile(currentUser.id, profileLink);
  // }, [profileLink]);

  return (
    <div className="profile">
      <div className="profile_inputcontainer">
        <img src="public\assets\background.jpg" />
        <div className="profile-info">
          {Object.values(currentProfile).length === 0 ? (
            <div>
              <button
                onClick={() => setModalOpen4(true)}
                className="profile-pic profile-btn"
              ></button>
              {/* <input type="file"  />
            <button onClick={imageUpload}>Upload</button> */}
              <ProfilePicEdit
                setModalOpen4={setModalOpen4}
                modalOpen4={modalOpen4}
                getImage={getImage}
                imageUpload={imageUpload}
                currentImage={currentImage}
                progress={progress}
              />
              <Avatar
                className="profile-pic"
                src={
                  Object.values(currentProfile).length === 0
                    ? currentUser?.profileLink
                    : currentProfile?.profileLink
                }
              />
            </div>
          ) : (
            <div>
              <Avatar
                className="profile-pic"
                src={
                  Object.values(currentProfile).length === 0
                    ? currentUser?.profileLink
                    : currentProfile?.profileLink
                }
              />
            </div>
          )}
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
