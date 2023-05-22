import React, {useEffect} from 'react';
import ProjectCardd from "./ProjectCardd";
import {useDispatch, useSelector} from "react-redux";
import {getProjects} from "../api/ProjectsSliceFunctions";

const ProjectListt = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjects())
  }, []);

  const userId = localStorage.getItem('userId')
  const role = localStorage.getItem('role')

  const {projects} = useSelector(state => state.projects)

  const NotArchivedProjects = projects.filter(project => !project.is_archived && project.manager.id == userId)
  const NotArchivedAdminProjects = projects.filter(project => !project.is_archived)
  console.log('kdslslf', NotArchivedProjects)
  let activeProjects = [], completedProjects = [], failedProjects = []
  if(role === 'Менеджер') {
    activeProjects =  NotArchivedProjects.filter(i => i.status == 'Active')
    completedProjects =  NotArchivedProjects.filter(i => i.status == 'Completed')
    failedProjects =  NotArchivedProjects.filter(i => i.status == 'Failed')
  }else{
    activeProjects =  NotArchivedAdminProjects.filter(i => i.status == 'Active')
    completedProjects =  NotArchivedAdminProjects.filter(i => i.status == 'Completed')
    failedProjects =  NotArchivedAdminProjects.filter(i => i.status == 'Failed')
  }

  console.log('projectss:', projects)

  return (
    <div className='flex w-full h-[87vh] gap-2'>
      <div className='w-full p-4'>
        <div className='bg-[#1d2536] rounded-lg m-1 mb-2 mx-1 border border-[#28364c] flex items-center'>
          <span className="flex w-3 h-3 bg-[#218b4c] rounded-full ml-4"></span>
          <p className="text-gray-300 text-md font-bold p-2 overflow-y-hidden">В процессе</p>
        </div>
        <div className=' bg-container-bg w-full h-[79vh] p-2 overflow-y-auto rounded-xl'>
          {
            activeProjects.map(project => {
              return <ProjectCardd isInProgress='true' project={project}/>
            })
          }
        </div>
      </div>

      <div className='w-full p-4'>
        <div className='bg-[#1d2536] rounded-lg m-1 mb-2 mx-1 border border-[#28364c] flex items-center'>
          <span className="flex w-3 h-3 bg-[#2367a3] rounded-full ml-4"></span>
          <p className="text-gray-300 text-md font-bold p-2 overflow-y-hidden">Завершенные</p>
        </div>
        <div className=' bg-container-bg w-full h-[79vh] p-2 overflow-y-auto rounded-xl'>
          {
            completedProjects.map(project => {
              return <ProjectCardd isCompleted='true' project={project}/>
            })
          }
        </div>
      </div>

      <div className='w-full p-4'>
        <div className='bg-[#1d2536] rounded-lg m-1 mb-2 mx-1 border border-[#28364c] flex items-center'>
          <span className="flex w-3 h-3 bg-red-500 rounded-full ml-4"></span>
          <p className="text-gray-300 text-md font-bold p-2 overflow-y-hidden">Незавершенные</p>
        </div>
        <div className=' bg-container-bg w-full h-[79vh] p-2 overflow-y-auto rounded-xl'>
          {
            failedProjects.map(project => {
              return <ProjectCardd isFailed='true' project={project}/>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectListt;
