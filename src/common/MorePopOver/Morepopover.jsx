import React from "react";
import "./index.scss";
import { Popover, ConfigProvider } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
// import { deletePost } from "../../api/FirestoreAPIs";
import { deletePost } from "../../api/FirestoreAPIs";
// import { Height } from "@mui/icons-material";

// const text = <span>Title</span>;
const MorePopoverContent = ({ getEditData, posts }) => (
  <div
    className="popup"
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <div className="btn-btn" style={{ height: "40px" }}>
      <button className="first-btn" onClick={() => getEditData(posts)}>
        <EditNoteIcon sx={{ marginRight: "12px", fontSize: "20px" }} /> Edit
        post
      </button>
    </div>
    <div className="btn-btn" style={{ height: "40px" }}>
      <button
        onClick={() => {
          deletePost(posts.id);
        }}
      >
        <DeleteIcon sx={{ marginRight: "12px", fontSize: "20px" }} /> Delete
        post
      </button>
    </div>
  </div>
);
const buttonWidth = 80;
const Morepopover = ({ getEditData, posts }) => (
  <ConfigProvider
    button={{
      style: {
        width: buttonWidth,
        margin: 4,
      },
    }}
  >
    <div
      style={{
        marginInlineStart: buttonWidth,
        clear: "both",
        whiteSpace: "nowrap",
      }}
    >
      <Popover
        placement="bottomRight"
        content={<MorePopoverContent getEditData={getEditData} posts={posts} />}
        // trigger="click"
      >
        <MoreVertIcon className="more-icon" />
      </Popover>
    </div>
  </ConfigProvider>
);
export default Morepopover;
