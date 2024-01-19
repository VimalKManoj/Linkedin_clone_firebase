import React from "react";
import { Button, Modal, Progress } from "antd";

import "./index.scss";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";

const ModalComponent = ({
  modalOpen,
  setModalOpen,
  setStatus,
  status,
  sendStatus,
  isEdit,
  updateStatus,
  PostUploadImage,
  setPostImage,
  postImage,
  setProgress,
  progress,
  currentPost,
}) => {
  console.log(currentPost);
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => {
          setStatus("");
          setPostImage("");
          setModalOpen(false);
        }}
        onCancel={() => {
          setStatus("");
          setPostImage("");
          setModalOpen(false);
        }}
        footer={[
          <Button
            key="submit"
            type="primary"
            // onClick={sendStatus}
            // disabled={status.length > 0 ? false : true}
          ></Button>,
        ]}
      >
        <div className="create-post-div">
          <textarea
            className="modal-input"
            rows={5}
            placeholder="What do you want to talk about?"
            onChange={(event) => {
              setStatus(event.target.value);
            }}
            value={status}
          ></textarea>
          {postImage.length > 0 ? (
            <>
              {postImage?.length > 0 || currentPost?.postImage?.length > 0 ? (
                <img
                  className="preview-image"
                  src={postImage || currentPost?.postImage}
                  alt="postImage"
                />
              ) : (
                <></>
              )}

              {progress > 0 && <Progress percent={progress} />}
            </>
          ) : (
            <></>
          )}
          <div className="insert-icon-div">
            <label htmlFor="post-image">
              <InsertPhotoOutlinedIcon className="insert-icon" />
            </label>
            <input
              id="post-image"
              className="post-image-btn"
              type="file"
              hidden
              onChange={(e) =>
                PostUploadImage(e.target.files[0], setPostImage, setProgress)
              }
            ></input>
          </div>

          <button
            type="submit"
            className="post-btn"
            onClick={isEdit ? updateStatus : sendStatus}
            disabled={status.length > 0 ? false : true}
          >
            {isEdit ? "Update" : "Post"}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
