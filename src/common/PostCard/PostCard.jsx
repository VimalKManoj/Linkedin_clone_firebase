import React, { useMemo, useState } from "react";
import "./postcard.scss";
import { Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import getCurrentTime from "../../helper/Moment";
import { formatFirebaseTimestamp } from "../../helper/TimeFormatter";
import Morepopover from "../MorePopOver/Morepopover";

import { useNavigate } from "react-router-dom";
import {
  getCurrentUser,
  postComment,
  getComments,
  getAllUsers,
} from "../../api/FirestoreAPIs";
import Likebutton from "../LikeButton/likebutton.scss/Likebutton";

export default function PostCard({ posts, getEditData }) {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const getComment = (event) => {
    setComment(event.target.value);
  };

  const addComment = () => {
    postComment(
      posts.id,
      comment,
      getCurrentTime(),
      currentUser.name,
      currentUser.id
    );
    setComment("");
  };

  useMemo(() => {
    getCurrentUser(setCurrentUser);
    getAllUsers(setAllUsers);
  }, []);

  useMemo(() => {
    getComments(posts.id, setComments);
  }, [posts.id, currentUser.id]);

  let navigate = useNavigate();
  return (
    <div className="post">
      <div className="post-header-body">
        <div className="post_header">
          <div className="avatar-info">
            <Avatar
              onClick={() => {
                navigate("/profile", {
                  state: { id: posts?.id, email: posts.userEmail },
                });
              }}
              className="avatar_feed"
              src={
                allUsers
                  .filter((item) => item.id === posts.userID)
                  .map((item) => item.profileLink)[0]
              }
            />
            <div className="post_info">
              <h3
                onClick={() => {
                  navigate("/profile", {
                    state: { id: posts?.id, email: posts.userEmail },
                  });
                }}
              >
                {
                  allUsers
                    .filter((item) => item.id === posts.userID)
                    .map((item) => item.name)[0]
                }
              </h3>
              <p>{posts.timeStamp}</p>
            </div>
          </div>
          {currentUser.id === posts.userID ? (
            <div className="more-popover">
              <Morepopover getEditData={getEditData} posts={posts} />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="post_body">
          <p>{posts.status}</p>
          {posts.postImage ? (
            <img className="post-image" src={posts.postImage}></img>
          ) : (
            <></>
          )}
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
            <button onClick={addComment} disabled={comment ? false : true}>
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
                    <Avatar
                      className="avatar_feed"
                      src={
                        allUsers
                          .filter((item) => item.id === comment.userid)
                          .map((item) => item.profileLink)[0]
                      }
                    />
                    <div className="name-comment">
                      <p key={comment.id}>
                        <span>
                          {
                            allUsers
                              .filter((item) => item.id === comment.userid)
                              .map((item) => item.name)[0]
                          }
                        </span>
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
