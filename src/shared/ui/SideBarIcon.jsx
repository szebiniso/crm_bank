import React from "react";

const SideBarIcon = (props: {
  title?: string;
  icon: string | JSX.Element | JSX.Element[];
}) => (
  <div className="sidebar-icon group">
    {props.icon}

    {props.title && (
      <span className="sidebar-tooltip group-hover:scale-100">
        {props.title}
      </span>
    )}
  </div>
);

export default SideBarIcon;
