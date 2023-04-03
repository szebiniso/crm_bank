import React from "react";

const ProjectCard = ({ title, description }) => {
  return (
    <div className="p-3 w-50 bg-gray-400 rounded-lg shadow hover:bg-gray-300 dark:bg-gray-800 dark:border-gray-500 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-lg font-bold tracking-tight text-black dark:text-white">
        {title}
      </h5>
      {/*<p className=" mb-4 font-normal text-black-400 dark:text-gray-400">*/}
      {/*  {description}*/}
      {/*</p>*/}
      <div>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
          Frontend
        </span>
        {/*<span className="bg-pink-100 texZt-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">*/}
        {/*  Backend*/}
        {/*</span>*/}
        <span className="bg-emerald-100 texZt-emerald-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-emerald-900 dark:text-emerald-300">
          UX/UI
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
