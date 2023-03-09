import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Registration from "./Registration";
import Auth from "./Auth";
import MainRouting from "./mainPage";
import UsersRouting from "./usersPage";

// const TestPage = lazy(() => import("./test"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/projects" element={<MainRouting />} />
      <Route path="/users" element={<UsersRouting />} />
      <Route path="/" element={<Auth />} />
      <Route path="/registration" element={<Registration />} />
      {/*<Navigate to="/" />*/}
    </Routes>
  );
};
