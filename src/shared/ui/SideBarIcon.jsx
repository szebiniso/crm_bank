import React from "react";

const SideBarIcon = ({title, icon, onClick}) => (
  <div className="sidebar-icon group" onClick={onClick}>
    {icon}

    {title && (
      <span className="sidebar-tooltip group-hover:scale-100">
        {title}
      </span>
    )}
  </div>
);

export default SideBarIcon;
