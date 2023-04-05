import React, { lazy } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Users from "./Users";
import SideNavbar from "../widgets/sidebar/ui/SideNavbar";
import Projects from "./Projects";
import Admins from "./Admins";
import Organizations from "./Organizations";
import ProjectManagers from "./ProjectManagers";
import Iterations from "./Iterations";

// const TestPage = lazy(() => import("./test"));

const MainRouting = () => {
  return (
    <div className="grid grid-cols-5/95">
      <SideNavbar />
      <Routes>
        {/*Super Admin*/}
        <Route path="/" element={<Admins />} />
        <Route path="/organizations" element={<Organizations />} />

        {/*Admin*/}
        <Route path="/projects" element={<Projects />} />
        <Route path="/project_managers" element={<ProjectManagers />} />

        {/*Project Manager*/}
        <Route path="/projects" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/iterations" element={<Iterations />} />
      </Routes>
    </div>
  );
};

export default MainRouting;
