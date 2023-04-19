import React from "react";

const SideBarIcon = ({title, icon, onClick, active}) => (
  <div className={active ? "sidebar-icon group" : "group"} onClick={onClick}>
    {icon}

    {title && (
      <span className="sidebar-tooltip group-hover:scale-100">
        {title}
      </span>
    )}
  </div>
);

export default SideBarIcon;
