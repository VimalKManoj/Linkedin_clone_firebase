import React, { useState } from "react";
import { Modal } from "antd";
import { editProfile } from "../../api/FirestoreAPIs";
import "./index.scss";

const AboutEdit = ({ modalOpen2, setModalOpen2, currentUser }) => {
  const [editInputs, setEditInputs] = useState(currentUser);
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfileData = async () => {
    console.log(currentUser.id);
    await editProfile(currentUser?.id, editInputs);
    setModalOpen2(false);
    console.log(currentUser);
  };
  return (
    <>
      <Modal
        title="Edit Profile"
        centered
        open={modalOpen2}
        onOk={() => setModalOpen2(false)}
        onCancel={() => setModalOpen2(false)}
        footer={
          [
            //   <Button key="submit" type="primary">
            //     Post
            //   </Button>,
          ]
        }
      >
        <div className="edit-profile-info">
          <label htmlFor="birthdate">Date of Birth:</label>
          <input
            onChange={getInput}
            type="date"
            id="birthdate"
            name="birthdate"
            value={editInputs.birthdate}
            required
          />

          <label htmlFor="bio">Bio:</label>
          <textarea
            onChange={getInput}
            rows={14}
            type="text"
            name="bio"
            value={editInputs.bio}
            placeholder="Bio"
            required
          />

          <button onClick={updateProfileData}>Submit</button>
        </div>
      </Modal>
    </>
  );
};
export default AboutEdit;

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
