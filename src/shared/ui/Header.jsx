import React from 'react';
import CreateButton from "./CreateButton";
import CreateButtonWithIcon from "./CreateButtonWithIcon";
import {ArchiveBoxIcon, RectangleGroupIcon, SquaresPlusIcon} from "@heroicons/react/24/outline";
import ProjectsListSelect from "../../features/searchFrom/ui/ProjectsListSelect";

const Header = ({onChange, isButtonExist, title, isManagerProjects, iterationOptionBtn, setProjectId, isAdminProjects, isManagerProjectsArchive, isAdminProjectsArchived, navigateToArchiveAdmin, navigateToActiveAdmin}) => {
  return (
    <div className="flex h-12 justify-between items-center mx-4">
      <div className='flex gap-8'>
        <h2 className="mb-2 ml-2 text-3xl tracking-tight font-extrabold text-gray-300 dark:text-white">
          {title}
        </h2>
        {
          iterationOptionBtn && <ProjectsListSelect setProjectId={setProjectId}/>
        }
      </div>

      {
        isButtonExist && <CreateButton onChange={onChange} type='button' text='Создать'/>
      }
      {
        isAdminProjects && <div className='flex gap-2'>
        <CreateButtonWithIcon icon={<ArchiveBoxIcon className="h-5 w-5 text-gray-200" />} onChange={navigateToArchiveAdmin} type='button' text='Архив'/>
        {/*<CreateButtonWithIcon icon={<ChartBarIcon  className="h-5 w-5 text-gray-200" />} onChange={onChange} type='button' text='Статистика'/>*/}
        <CreateButtonWithIcon icon={<SquaresPlusIcon  className="h-5 w-5 text-gray-200" />} onChange={onChange} type='button' text='Создать'/>
        </div>
      }
      {
        isAdminProjectsArchived && <div className='flex gap-2'>
          <CreateButtonWithIcon icon={<RectangleGroupIcon className="h-5 w-5 text-gray-200" />} onChange={navigateToActiveAdmin} type='button' text='Активные'/>
          {/*<CreateButtonWithIcon icon={<ChartBarIcon  className="h-5 w-5 text-gray-200" />} onChange={onChange} type='button' text='Статистика'/>*/}
          <CreateButtonWithIcon icon={<SquaresPlusIcon  className="h-5 w-5 text-gray-200" />} onChange={onChange} type='button' text='Создать'/>
        </div>
      }
      {
        isManagerProjects && <CreateButtonWithIcon icon={<ArchiveBoxIcon className="h-5 w-5 text-gray-200" />} onChange={onChange} type='button' text='Архив'/>
      }
      {
        isManagerProjectsArchive && <CreateButtonWithIcon icon={<RectangleGroupIcon className="h-5 w-5 text-gray-200" />} onChange={onChange} type='button' text='Автивные'/>
      }
    </div>
  );
};

export default Header;
