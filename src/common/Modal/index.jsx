import React from "react";
import { Button, Modal } from "antd";
import "./index.scss";

const ModalComponent = ({
  modalOpen,
  setModalOpen,
  setStatus,
  status,
  sendStatus,
}) => {
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
            key="submit"
            type="primary"
            // onClick={sendStatus}
            // disabled={status.length > 0 ? false : true}
          >
            Post
          </Button>,
        ]}
      >
        <div className="create-post-div">
          <input
            className="modal-input"
            placeholder="What do you want to talk about?"
            onChange={(event) => {
              setStatus(event.target.value);
            }}
            value={status}
          ></input>
          <button
            type="submit"
            className="post-btn"
            onClick={sendStatus}
            disabled={status.length > 0 ? false : true}
          >
            Post
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
