import React from "react";
import { UserPlusIcon } from "@heroicons/react/20/solid";
import SearchForm from "../../features/searchFrom/ui/SearchForm";

const UsersHeader = () => {
  return (
    <div className="relative bg-transparent dark:bg-gray-800 sm:rounded-lg">
      <div className="flex items-stretch justify-between flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
        <div className="flex items-center w-full space-x-3 md:w-auto">
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-300 focus:outline-none bg-gray-700 rounded-full border border-gray-500 hover:bg-gray-600 hover:text-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Фильтр
          </button>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-300 focus:outline-none bg-gray-700 rounded-full border border-gray-500 hover:bg-gray-600 hover:text-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Сортировать (А-Я)
          </button>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-300 focus:outline-none bg-gray-700 rounded-full border border-gray-500 hover:bg-gray-600 hover:text-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Сортировать (Я-А)
          </button>
        </div>
        <SearchForm />
      </div>
    </div>
  );
};

export default UsersHeader;
