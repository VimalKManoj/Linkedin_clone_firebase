import React, { useState } from "react";
import { ProfileCard } from "../common/ProfileCard/ProfileCard";
// import ProfileEdit from "../common/ProfileEdit/ProfileEdit";

export const ProfileComponent = ({ currentUser }) => {
  const [isEdit, setIsEdit] = useState(false);

  const onEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <>
      {/* {isEdit ? (
        <ProfileEdit onEdit={onEdit} />
      ) : ( */}
      <ProfileCard currentUser={currentUser} onEdit={onEdit} />
      {/* )} */}
    </>
  );
};
