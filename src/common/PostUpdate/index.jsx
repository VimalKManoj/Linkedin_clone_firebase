import React, { useState } from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import "./index.scss";
import ModalComponent from "../Modal";

export default function PostStatus() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="feed">
      <div className="feed_inputcontainer">
        <div className="feed_input">
          <CreateOutlinedIcon />
          
            <button onClick={() => setModalOpen(true)}>Start a post...</button>
            <ModalComponent modalOpen={modalOpen} setModalOpen={setModalOpen} />
  
        </div>
      </div>
    </div>
  );
}
