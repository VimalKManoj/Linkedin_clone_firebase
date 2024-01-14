import React from "react";
import "./postcard.scss";
import { Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { useNavigate } from "react-router-dom";

export default function PostCard({ posts }) {
  let navigate = useNavigate();
  return (
    <div className="post">
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
      <div className="post_buttons">
        <div className="post_button like">
          <ThumbUpOutlinedIcon className="post_icon" />
          <h4>Like</h4>
        </div>
        <div className="post_button comment">
          <CommentOutlinedIcon className="post_icon" />
          <h4>Send</h4>
        </div>
        <div className="post_button share">
          <ShareOutlinedIcon className="post_icon" />
          <h4>Share</h4>
        </div>
        <div className="post_button send">
          <SendIcon className="post_icon" />
          <h4>Send</h4>
        </div>
      </div>
    </div>
  );
}
