import React, { useMemo, useState } from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import "./index.scss";
import ModalComponent from "../Modal";
import { getStatus, postStatus, updatePost } from "../../api/FirestoreAPIs";
import PostCard from "../PostCard/PostCard";
import getCurrentTime from "../../helper/Moment";
import { getUniqueID } from "../../helper/getUniqueID";
import { PostUploadImage } from "../../api/ImageAPI";

export default function PostStatus({ currentUser }) {
  // const [currentImage, setCurrentImage] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [isEdit, setisEdit] = useState(false);
  const [postImage, setPostImage] = useState("");
  const [progress, setProgress] = useState(0);

  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTime(),
      userEmail: currentUser.email,
      userName: currentUser.name,
      postID: getUniqueID(),
      userID: currentUser.id,
      postImage: postImage,
    };

    await postStatus(object);
    await setModalOpen(false);
    setisEdit(false);
    await setStatus("");
  };

  const getEditData = (posts) => {
    setCurrentPost(posts);
    setModalOpen(true);
    setStatus(posts?.status);
    setisEdit(true);
  };

  const updateStatus = () => {
    updatePost(currentPost.id, status, postImage);
    setModalOpen(false);
    setStatus("");
  };

  console.log(currentPost);

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);
  return (
    <div className="feed">
      <div className="feed_inputcontainer">
        <h4 className="new-post">NEW POST</h4>
        <div className="feed_input">
          <CreateOutlinedIcon />

          <button
            onClick={() => {
              setModalOpen(true);
              setisEdit(false);
            }}
          >
            What's on your mind?
          </button>
          <ModalComponent
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            status={status}
            setStatus={setStatus}
            sendStatus={sendStatus}
            isEdit={isEdit}
            updateStatus={updateStatus}
            PostUploadImage={PostUploadImage}
            setPostImage={setPostImage}
            postImage={postImage}
            setProgress={setProgress}
            progress={progress}
            currentPost={currentPost}
          />
        </div>
      </div>
      {allStatus.map((posts) => {
        return (
          <PostCard posts={posts} key={posts.id} getEditData={getEditData} />
        );
      })}
    </div>
  );
}
