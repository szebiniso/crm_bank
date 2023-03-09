import React from "react";
import SideNavbar from "../../widgets/sidebar/ui/SideNavbar";
import ProjectOptionWidget from "../../widgets/ProjectOptionWidget/ui";
import UsersList from "../../entities/Users/ui";

const UsersPage = () => {
  return (
    <div className="grid grid-cols-5/95">
      <SideNavbar />
        <div className="flex basis-auto bg-main-dark w-full">
          <UsersList />
        </div>
    </div>
  );
};

export default UsersPage;
