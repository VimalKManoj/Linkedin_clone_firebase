import React, { useState } from "react";
import { Modal } from "antd";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { Progress } from "antd";
import "./index.scss";

const ProfilePicEdit = ({
  modalOpen4,
  setModalOpen4,
  getImage,
  imageUpload,
  currentImage,
  progress,
}) => {
  return (
    <>
      <Modal
        title="Edit Profile Picture"
        centered
        open={modalOpen4}
        onOk={() => setModalOpen4(false)}
        onCancel={() => setModalOpen4(false)}
        footer={[]}
      >
        <div className="edit-profilepic-info">
          <div className="image-upload-main">
            <p>{currentImage.name}</p>
            <label className="upload-btn" for="image-upload">
              <CameraAltOutlinedIcon />
            </label>

            <input hidden id="image-upload" type={"file"} onChange={getImage} />
          </div>
          {progress === 0 ? (
            <></>
          ) : (
            <div className="progress-bar">
              <Progress percent={progress} />
            </div>
          )}
          <button
            disabled={currentImage.name ? false : true}
            onClick={imageUpload}
          >
            Upload
          </button>
        </div>
      </Modal>
    </>
  );
};
export default ProfilePicEdit;
