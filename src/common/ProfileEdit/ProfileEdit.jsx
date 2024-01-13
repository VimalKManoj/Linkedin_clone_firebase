import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./index.scss";

const ProfileEdit = ({ modalOpen, setModalOpen, currentUser }) => {
  const [editInputs, setEditInputs] = useState({});
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };
  console.log(currentUser);
  const updateProfileData = () => {};
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
          <form>
            <label htmlFor="name">Name:</label>
            <input
              onChange={getInput}
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="place">Place:</label>
            <input
              onChange={getInput}
              type="text"
              name="place"
              placeholder="Enter your place"
              required
            />

            <label htmlFor="headline">Headline:</label>
            <textarea
              onChange={getInput}
              rows={4}
              type="text"
              name="headline"
              placeholder="Enter your headline"
              required
            />
            <button type="submit" onClick={updateProfileData}>
              Submit
            </button>
          </form>
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
