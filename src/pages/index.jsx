import React, { lazy } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import MainRouting from "./MainRouting";
import Auth from "./Auth";
import Iterations from "./Iterations";

// const TestPage = lazy(() => import("./test"));

export const Routing = () => {
  return (
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/main/*" element={<MainRouting />} />
        <Route path="/projects/:id" element={<Iterations />} />
      </Routes>
  );
};
