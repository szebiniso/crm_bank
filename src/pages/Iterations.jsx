import React from "react";
import Container from "../shared/ui/Container";
import ProjectDetailsPage from "../entities/Projects/ui/ProjectDetailsPage";
import {ArrowSmallLeftIcon} from "@heroicons/react/20/solid";
import {NavLink} from "react-router-dom";

const Iterations = () => {

  return (
    <>
      <div className="flex basis-auto bg-main-dark w-full">
        <section className="w-full h-screen bg-main_blue overflow-auto">
          <div className="py-4 h-screen bg-main_blue mx-auto max-w-screen-2xl lg:pt-6 lg:px-8">
            <NavLink className='absolute top-5 left-4' to="/main/projects/" ><ArrowSmallLeftIcon className="h-14 w-14 text-main-blue " /></NavLink>
            <ProjectDetailsPage/>
          </div>
        </section>
      </div>
    </>
  );
};

export default Iterations;
