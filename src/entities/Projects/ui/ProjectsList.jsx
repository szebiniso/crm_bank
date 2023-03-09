import React from "react";

const ProjectsList = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="mb-3 xl:w-30 w-full">
        <select
          id="small"
          className="block w-full p-2 pl-2 mb-6 text-sm text-gray-300 border border-gray-400 rounded-lg bg-gray-500 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Выберите проект</option>
          <option value="US">Проект 1</option>
          <option value="CA">Проект 2</option>
          <option value="FR">Проект 3</option>
          <option value="DE">Проект 4</option>
        </select>
      </div>
    </div>
  );
};

export default ProjectsList;
