import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import MainPage from "./MainPage";
import SideNavbar from "../../widgets/sidebar/ui/SideNavbar";

// const TestPage = lazy(() => import("./test"));

const MainRouting = () => {
  return (
    <div className="grid grid-cols-5/95 overflow-hidden">
        <SideNavbar />

      <div className="w-full h-screen overflow-auto">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/*<Navigate to="/" />*/}
        </Routes>
      </div>
    </div>
  );
};

export default MainRouting;
