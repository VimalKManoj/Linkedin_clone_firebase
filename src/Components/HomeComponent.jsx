import React from "react";
import PostStatus from "../common/PostUpdate";

const HomeComponent = ({ currentUser }) => {
  return <PostStatus currentUser={currentUser} />;
};

export default HomeComponent;
