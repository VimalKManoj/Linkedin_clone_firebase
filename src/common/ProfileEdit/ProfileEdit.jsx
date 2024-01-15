import React, { useState } from "react";
import { Modal } from "antd";
import { editProfile } from "../../api/FirestoreAPIs";
import "./index.scss";

const ProfileEdit = ({ modalOpen, setModalOpen, currentUser }) => {
  const [editInputs, setEditInputs] = useState(currentUser);
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfileData = async () => {
    await editProfile(currentUser?.id, editInputs);
    setModalOpen(false);
    console.log(editInputs);
  };
  return (
    <>
      <Modal
        title="Edit Profile"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={
          [
            //   <Button key="submit" type="primary">
            //     Post
            //   </Button>,
          ]
        }
      >
        <div className="edit-profile-info">
          <label htmlFor="name">Name:</label>
          <input
            onChange={getInput}
            type="text"
            value={editInputs.name}
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="job">Job Title:</label>
          <input
            onChange={getInput}
            value={editInputs.job}
            type="text"
            name="job"
            placeholder="Enter your place"
            required
          />

          <label htmlFor="place">Place:</label>
          <input
            onChange={getInput}
            value={editInputs.place}
            type="text"
            name="place"
            placeholder="Enter your place"
            required
          />

          <label htmlFor="headline">Headline:</label>
          <textarea
            onChange={getInput}
            value={editInputs.headline}
            rows={4}
            type="text"
            name="headline"
            maxLength="170"
            placeholder="Enter your headline"
            required
          />
          <button onClick={updateProfileData}>Submit</button>
        </div>
      </Modal>
    </>
  );
};
export default ProfileEdit;

// import React from "react";
// import "./index.scss";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// const ProfileEdit = ({ onEdit }) => {
//   return (
//     <div className="profile">
//       <div className="profile_inputcontainer">
//         <button onClick={onEdit}>
//           <ArrowBackIcon />
//         </button>

//       </div>
//     </div>
//   );
// };

// export default ProfileEdit;
