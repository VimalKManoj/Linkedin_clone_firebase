import React, { useState } from "react";
import { ProfileCard } from "../common/ProfileCard/ProfileCard.1";
// import ProfileEdit from "../common/ProfileEdit/ProfileEdit";

export const ProfileComponent = ({ currentUser }) => {
  const [isEdit, setIsEdit] = useState(false);

  const onEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <>
      <ProfileCard currentUser={currentUser} onEdit={onEdit} />
    </>
  );
};
