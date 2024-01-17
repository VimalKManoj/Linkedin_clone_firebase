import React, { useMemo, useState } from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import "./index.scss";
import ModalComponent from "../Modal";
import { getStatus, postStatus } from "../../api/FirestoreAPIs";
import PostCard from "../PostCard/PostCard";
import getCurrentTime from "../../helper/Moment";
import { getUniqueID } from "../../helper/getUniqueID";

export default function PostStatus({ currentUser }) {
  let userEmail = localStorage.getItem("userEmail");
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);

  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTime(),
      userEmail: currentUser.email,
      userName: currentUser.name,
      postID: getUniqueID(),
      userID: currentUser.id,
    };

    await postStatus(object);
    await setModalOpen(false);
    await setStatus("");
  };

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);
  return (
    <div className="feed">
      <div className="feed_inputcontainer">
        <h4 className="new-post">NEW POST</h4>
        <div className="feed_input">
          <CreateOutlinedIcon />

          <button onClick={() => setModalOpen(true)}>
            What's on your mind?
          </button>
          <ModalComponent
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            status={status}
            setStatus={setStatus}
            sendStatus={sendStatus}
          />
        </div>
      </div>
      {allStatus.map((posts) => {
        return <PostCard posts={posts} key={posts.id} />;
      })}
    </div>
  );
}
