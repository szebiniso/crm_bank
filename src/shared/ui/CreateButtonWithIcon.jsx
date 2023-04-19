import React from 'react';

const CreateButton = ({onChange, type, text, icon}) => {
  return (
      <button
        onClick={onChange}
        type={type}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-300 rounded-lg group bg-gray-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-gray-300 dark:focus:ring-cyan-800">

                <span
                  className="relative flex items-center gap-2 px-5 py-2.5 transition-all ease-in duration-75 bg-main-dark dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  {icon}
                    {text}
                </span>
      </button>
  );
};

export default CreateButton;
