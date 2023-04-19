import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProjects} from "../../../entities/Projects/api/ProjectsSliceFunctions";

const ProjectsListSelect = ({setProjectId}) => {

  const {projects} = useSelector(state => state.projects)

  const userId = localStorage.getItem('userId')
  const projectId = localStorage.getItem('projectId')

  const projectsById = projects.filter(project => project.manager == userId)

  const dispatch = useDispatch()
  const projectNameById = projects.filter(i => i.id == projectId)

  console.log('jj',projectNameById[0]?.name)

  const handleSetProjectId = (e) => {
    setProjectId(e.target.value)
    localStorage.setItem("projectId", e.target.value)
  }

  useEffect(() => {
    dispatch(getProjects())
  }, []);

  return (
    <div>
      <select
        onChange={(e) => handleSetProjectId(e)}
        name="project"
        value={projectNameById[0]?.name}
        className="w-full max-h-10 overflow-auto bg-transparent focus:ring-blue-500 border-none font-bold text-md outline-none text-gray-300 md:p-1 lg:p-2 2xl:p-2 md:text-1 lg:text-1 xl:text-1 "
      >
        <option className='text-gray-200 bg-gray-700' value={projectsById}>{projectNameById[0]?.name}</option>
        {
          projectsById.map(project => {
            return <option className='text-gray-200 bg-gray-700' value={project.id}>{project.name}</option>
          })
        }
      </select>
    </div>
  );
};

export default ProjectsListSelect;
