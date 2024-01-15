// import React, { useState } from "react";
// import { Modal } from "antd";
// import { editProfile } from "../../api/FirestoreAPIs";
// import "./index.scss";

// const JobEdit = ({
//   modalOpen3,
//   setModalOpen3,
//   currentUser,
//   onAddExperience,
// }) => {
//   // const [editInputs, setEditInputs] = useState({
//   //   ...currentUser,
//   //   experiences: [],
//   // });
//   const [jobTitle, setJobTitle] = useState("");
//   const [company, setCompany] = useState("");
//   const [location, setLocation] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [description, setDescription] = useState("");

//   const handleAddExperience = async () => {
//     const experienceData = {
//       jobTitle,
//       company,
//       location,
//       startDate,
//       endDate: endDate || "Present",
//       description,
//     };

//     try {
//       // Update the profile in Firestore
//       const updatedProfile = await editProfile(currentUser?.id, {
//         ...currentUser,
//         experiences: [...currentUser.experiences, experienceData],
//       });

//       // Update the state with the latest data from Firestore
//       setJobTitle("");
//       setCompany("");
//       setLocation("");
//       setStartDate("");
//       setEndDate("");
//       setDescription("");

//       // Close the modal
//       setModalOpen3(false);
//     } catch (error) {
//       console.error("Error updating data in Firebase:", error);
//     }
//   };
//   return (
//     <>
//       <Modal
//         title="Edit Profile"
//         centered
//         open={modalOpen3}
//         onOk={() => setModalOpen3(false)}
//         onCancel={() => setModalOpen3(false)}
//         footer={
//           [
//             //   <Button key="submit" type="primary">
//             //     Post
//             //   </Button>,
//           ]
//         }
//       >
//         <div className="edit-profile-info">
//           <label htmlFor="jobTitle">Job Title:</label>
//           <input
//             type="text"
//             id="jobTitle"
//             name="jobTitle"
//             value={jobTitle}
//             onChange={(e) => {
//               setJobTitle(e.target.value);
//               // {
//               //   getInput;
//               // }
//             }}
//             required
//           />

//           <label htmlFor="company">Company:</label>
//           <input
//             type="text"
//             id="company"
//             name="company"
//             value={company}
//             onChange={(e) => {
//               setCompany(e.target.value);
//               // {
//               //   getInput;
//               // }
//             }}
//             required
//           />

//           <label htmlFor="location">Location:</label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             value={location}
//             onChange={(e) => {
//               setLocation(e.target.value);
//               // {
//               //   getInput;
//               // }
//             }}
//             required
//           />

//           <label htmlFor="startDate">Start Date:</label>
//           <input
//             type="date"
//             id="startDate"
//             name="startDate"
//             value={startDate}
//             onChange={(e) => {
//               setStartDate(e.target.value);
//               // {
//               //   getInput;
//               // }
//             }}
//             required
//           />

//           <label htmlFor="endDate">End Date:</label>
//           <input
//             type="date"
//             id="endDate"
//             name="endDate"
//             value={endDate}
//             onChange={(e) => {
//               setEndDate(e.target.value);
//               // {
//               //   getInput;
//               // }
//             }}
//           />

//           <label htmlFor="description">Job Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={description}
//             onChange={(e) => {
//               setDescription(e.target.value);
//               // {
//               //   getInput;
//               // }
//             }}
//             rows="4"
//             required
//           ></textarea>

//           <button type="button" onClick={handleAddExperience}>
//             Add Experience
//           </button>
//         </div>
//       </Modal>
//     </>
//   );
// };
// export default JobEdit;

// // import React from "react";
// // import "./index.scss";
// // import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// // const ProfileEdit = ({ onEdit }) => {
// //   return (
// //     <div className="profile">
// //       <div className="profile_inputcontainer">
// //         <button onClick={onEdit}>
// //           <ArrowBackIcon />
// //         </button>

// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfileEdit;

import React, { useState } from "react";
import { Modal } from "antd";
import { editProfile } from "../../api/FirestoreAPIs";
import "./index.scss";

const JobEdit = ({ modalOpen3, setModalOpen3, currentUser }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const handleAddExperience = async () => {
    const experienceData = {
      jobTitle,
      company,
      location,
      startDate,
      endDate: endDate || "Present",
      description,
    };

    const currentUserExperiences = Array.isArray(currentUser?.experiences)
      ? currentUser.experiences
      : [];

    try {
      // Update the profile in Firestore
      const updatedProfile = await editProfile(currentUser?.id, {
        ...currentUser,
        experiences: [...currentUserExperiences, experienceData],
      });

      // Update the state with the latest data from Firestore
      setJobTitle("");
      setCompany("");
      setLocation("");
      setStartDate("");
      setEndDate("");
      setDescription("");

      // Close the modal
      setModalOpen3(false);
    } catch (error) {
      console.error("Error updating data in Firebase:", error);
    }
  };

  return (
    <>
      <Modal
        title="Edit Profile"
        centered
        open={modalOpen3}
        onOk={() => setModalOpen3(false)}
        onCancel={() => setModalOpen3(false)}
        footer={[]}
      >
        <div className="edit-job-info">
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />

          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />

          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />

          <label htmlFor="description">Job Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          ></textarea>

          <button type="button" onClick={handleAddExperience}>
            Add Experience
          </button>
        </div>
      </Modal>
    </>
  );
};

export default JobEdit;
