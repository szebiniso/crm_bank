import React from "react";

const SideBarIcon = ({title, icon}) => (
  <div className="sidebar-icon group">
    {icon}

    {title && (
      <span className="sidebar-tooltip group-hover:scale-100">
        {title}
      </span>
    )}
  </div>
);

export default SideBarIcon;
