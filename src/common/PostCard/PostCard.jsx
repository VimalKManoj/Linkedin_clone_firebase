import React, { useMemo, useState } from "react";
import "./postcard.scss";
import { Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import getCurrentTime from "../../helper/Moment";
import { formatFirebaseTimestamp } from "../../helper/TimeFormatter";

import { useNavigate } from "react-router-dom";
import {
  getCurrentUser,
  postComment,
  getComments,
} from "../../api/FirestoreAPIs";
import Likebutton from "../LikeButton/likebutton.scss/Likebutton";

export default function PostCard({ posts }) {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const getComment = (event) => {
    setComment(event.target.value);
  };

  const addComment = () => {
    postComment(posts.id, comment, getCurrentTime(), currentUser.name);
    setComment("");
  };

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  useMemo(() => {
    getComments(posts.id, setComments);
  }, [posts.id, currentUser.id]);

  // console.log(comments);
  let navigate = useNavigate();
  return (
    <div className="post">
      <div className="post-header-body">
        <div className="post_header">
          <Avatar className="avatar_feed" />
          <div className="post_info">
            <h3
              onClick={() => {
                navigate("/profile", {
                  state: { id: posts?.id, email: posts.userEmail },
                });
              }}
            >
              {posts.userName}
            </h3>
            <p>{posts.timeStamp}</p>
          </div>
        </div>
        <div className="post_body">
          <p>{posts.status}</p>
        </div>
      </div>

      <div className="post_buttons">
        <div className="like-comment">
          <Likebutton
            userid={currentUser?.id}
            postid={posts?.id}
            showCommentBox={showCommentBox}
            setShowCommentBox={setShowCommentBox}
          />
        </div>
        {showCommentBox ? (
          <div className="comment-send-container">
            <input
              onChange={getComment}
              className="comment-input"
              placeholder="Add a comment..."
              name="comment"
              value={comment}
            />
            <button onClick={addComment}>
              <SendIcon fontSize="small" />
            </button>
          </div>
        ) : (
          <></>
        )}

        <div className="post_button share">
          <ShareOutlinedIcon className="post_icon" sx={{ color: "#2172ed" }} />
          <h4>SHARE</h4>
        </div>
        {/* <div className="post_button send">
          <SendIcon className="post_icon" />
          <h4>Send</h4>
        </div> */}
      </div>
      {showCommentBox ? (
        <div className="comment-container">
          {comments.length > 0 ? (
            comments.map((comment) => {
              return (
                <>
                  <div className="single-comment">
                    <Avatar className="avatar_feed" />
                    <div className="name-comment">
                      <p key={comment.id}>
                        <span>{comment.name}</span>
                        {comment.comment}
                      </p>
                      <p className="comment-content">
                        {formatFirebaseTimestamp(comment.timeStamp)}
                      </p>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div className="no-comments">No comments yet</div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
