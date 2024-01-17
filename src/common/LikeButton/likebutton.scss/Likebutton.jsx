import React, { useMemo, useState } from "react";
import "./likebutton.scss";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { getLikesByUser, likePost } from "../../../api/FirestoreAPIs";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import CommentIcon from "@mui/icons-material/Comment";

const Likebutton = ({
  userid,
  postid,
  currentUser,
  showCommentBox,
  setShowCommentBox,
}) => {
  const [likesCount, setLikesCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    likePost(userid, postid, liked);
  };

  useMemo(() => {
    getLikesByUser(userid, postid, setLiked, setLikesCount);
  }, [userid, postid]);
  return (
    <>
      <div className="post_button like" onClick={handleLike}>
        {liked ? (
          <>
            <ThumbUpIcon sx={{ color: "#2172ed" }} className="post_icon" />
            <h4 className="like-count">{likesCount}</h4>
          </>
        ) : (
          <>
            <ThumbUpOutlinedIcon
              className="post_icon"
              sx={{ color: "#2172ed" }}
            />
            <h4 className="like-count">{likesCount > 0 && likesCount}</h4>
          </>
        )}

        {/* <h4>{liked ? "liked" : "like"}</h4> */}
      </div>
      <div
        className="post_button comment"
        onClick={() => {
          setShowCommentBox(true);
        }}
      >
        {showCommentBox ? (
          <CommentIcon className="post_icon" sx={{ color: "#2172ed" }} />
        ) : (
          <CommentOutlinedIcon
            className="post_icon"
            sx={{ color: "#2172ed" }}
          />
        )}
      </div>
    </>
  );
};

export default Likebutton;
