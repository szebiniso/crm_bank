import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import UsersPage from "./UsersPage";

// const TestPage = lazy(() => import("./test"));

const UsersRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      {/*<Navigate to="/" />*/}
    </Routes>
  );
};

export default UsersRouting;
