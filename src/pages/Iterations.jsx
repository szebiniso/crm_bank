import React from "react";
import Container from "../shared/ui/Container";
import ProjectDetailsPage from "../entities/Projects/ui/ProjectDetailsPage";
import {ArrowSmallLeftIcon} from "@heroicons/react/20/solid";
import {NavLink} from "react-router-dom";

const Iterations = () => {

  return (
    <>
      <Container>
        <NavLink className='absolute top-5 left-4' to="/main/projects/" ><ArrowSmallLeftIcon className="h-12 w-12 text-gray-500 " /></NavLink>
        <ProjectDetailsPage/>
      </Container>
    </>
  );
};

export default Iterations;
