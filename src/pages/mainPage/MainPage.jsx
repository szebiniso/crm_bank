import React from "react";
// import SideNavbar from "../../widgets/sidebar/ui/SideNavbar";
import ProjectOptionWidget from "../../widgets/ProjectOptionWidget/ui";
import Board from "../../Board";
// import Dashboard from "../../Board/Home/Dashboard";

const MainPage = () => {
  return (
    <>
      {/*<ProjectOptionWidget />*/}
      <div className="bg-main-dark overflow-auto">
        <div className='py-8 bg-main_blue mx-auto max-w-screen-xl lg:py-10 lg:px-10'>
          <h1 className="mb-4 text-4xl font-extrabold leading-none text-center tracking-tight text-gray-300 md:text-3xl lg:text-4xl dark:text-white">
            Название проекта
          </h1>
          {/*<p className="mb-2 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">*/}
          {/*  Описание проекта и тд...</p>*/}
          <Board/>
        </div>

        {/*<Dashboard />*/}
        {/*<Trello />*/}
      </div>
    </>
  );
};

export default MainPage;
