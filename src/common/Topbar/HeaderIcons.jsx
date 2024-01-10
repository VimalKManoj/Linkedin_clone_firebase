import { Avatar } from "@mui/material";
import React from "react";

const HeaderIcons = ({ avatar, Icon, title }) => {
  return (
    <div className="headericons">
      {Icon && <Icon className="headericons_icons" />}
      {avatar && <Avatar className="headericons_icons" src={avatar} />}
      <h4 className="headericons_title">{title}</h4>
    </div>
  );
};

export default HeaderIcons;
