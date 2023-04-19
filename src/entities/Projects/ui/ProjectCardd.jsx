import React, {useState} from 'react';
import {ArchiveBoxArrowDownIcon, ArchiveBoxXMarkIcon} from "@heroicons/react/24/outline";
import FormModal from "../../../widgets/Modals/ui/FormModal";
import ProjectDetails from "./ProjectDetails";
import {useDispatch} from "react-redux";
import {archiveProject, unArchiveProject} from "../api/ProjectsSliceFunctions";

const ProjectCardd = ({project, isInProgress}) => {

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const {name, description} = project

  const dispatch = useDispatch()

  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false)
  }

  const pathname = window.location.pathname
  console.log(pathname)

  const handleArchiveProject = (id) => {
    dispatch(archiveProject(id))
  }

  const handleUnArchiveProject = (id) => {
    dispatch(unArchiveProject(id))
  }

  return (
    <>
      <div className='relative'>
        {
          pathname === '/main/archived_projects' ? <ArchiveBoxXMarkIcon onClick={() => handleUnArchiveProject(project.id)} className="h-6 w-6 cursor-pointer hover:scale-125 hover:text-gray-300 text-gray-400 absolute z-10 right-4 top-4" /> :
            <ArchiveBoxArrowDownIcon onClick={() => handleArchiveProject(project.id)} className="h-6 w-6 cursor-pointer hover:scale-125 hover:text-gray-300 text-gray-400 absolute z-10 right-4 top-4" />
      }
        <div onClick={() => setShowDetailsModal(true)} className='w-68 bg-[#262f40] rounded-xl p-4 px-.5 flex flex-col gap-2 mb-2 cursor-pointer'>
          <span className="text-gray-50 text-xl font-bold mr-2">
            {name}
          </span>
          <p className="text-gray-200 mb-2 leading-5">{description}. Издание «Проект» специализируется на сложных журналистских</p>
          {
            isInProgress && <>
              <div className="flex justify-between mt-2">
                <span className="text-[14px] font-normal text-gray-100">Прогресс</span>
                <span className="text-sm font-normal text-gray-100">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-main-blue h-2 rounded-full"  style={{width: "45%"}}></div>
              </div>
            </>
          }
        </div>
      </div>

      <FormModal
        showModal={showDetailsModal}
        setShowModal={handleCloseDetailsModal}
      >
        {/*Project Details*/}
        <ProjectDetails closeDetailsModal={handleCloseDetailsModal} project={project}/>
      </FormModal>
    </>

  );
};

export default ProjectCardd;
