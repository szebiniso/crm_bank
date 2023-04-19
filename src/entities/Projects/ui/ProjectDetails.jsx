import React, {useState} from 'react';
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/solid";
import DeleteModal from "../../../widgets/Modals/ui/DeleteModal";
import FormModal from "../../../widgets/Modals/ui/FormModal";
import EditOrganization from "../../Organization/ui/EditOrganization";
import {useDispatch} from "react-redux";
import {ArrowLongRightIcon, ClipboardDocumentListIcon, UserCircleIcon} from "@heroicons/react/20/solid";
import {deleteProject} from "../api/ProjectsSliceFunctions";
import ProjectEditForm from "./ProjectEditForm";

const ProjectDetails = ({project, closeDetailsModal}) => {

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userId, setUserId] = useState(77);

  const dispatch = useDispatch()

  const handleOpenDeleteModal = (id) => {
    setUserId(id)
    setShowDeleteModal(true)
  }

  const handleOpenEditModal = (id) => {
    setUserId(id)
    setShowEditModal(true)
  }

  const handleCloseEditModal = () => {
    setShowEditModal(false)
  }

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false)
  }

  const handleDeleteOrganization = () => {
    const data = {id: project.id, handleCloseDeleteModal, closeDetailsModal}
    dispatch(deleteProject(data))
  }

  const {id, name, description} = project
  const role = localStorage.getItem('role')

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='text-2xl font-bold text-gray-300'>{name}</h3>
        <p className='my-8 text-md text-gray-300'>{description} Проверка текста на уникальность онлайн, точная и быстрая проверка покажет процент уникальности статьи для сайта или Яндекс Дзен.</p>
        <div className='text-gray-300 text-md flex flex-col gap-2 w-full'>
          <div className='flex gap-2'>
            <UserCircleIcon className="h-6 w-6 text-gray-300" />
            <p className='flex gap-2'>
              Менеджер
              <ArrowLongRightIcon className="h-6 w-6 text-gray-300" />
            </p>
            <span className='font-bold'>Жамал Адылбекова</span>
          </div>
          <div className='flex gap-2'>
            <ClipboardDocumentListIcon className="h-6 w-6" />
            <p className='flex gap-2'>
              Итерация
              <ArrowLongRightIcon className="h-6 w-6 text-gray-300" />
            </p>
            <span className='font-bold'> [2] Название итерации</span>
          </div>
        </div>
        {
          role === 'Админ' && <div className="mt-8 flex justify-between gap-4 w-full">
            <button
              onClick={handleOpenDeleteModal}
              type="button"
              className="focus:outline-none text-gray-200 flex justify-center w-1/2 gap-1 items-end bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              <TrashIcon className="h-6 w-6 text-gray-300" />
              <p>Удалить</p>
            </button>
            <button
              onClick={handleOpenEditModal}
              type="button"
              className="text-gray-200 flex justify-center gap-1 items-end w-1/2 bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              <PencilSquareIcon className="h-6 w-6 text-gray-300" />
              <p>Редактировать</p>
            </button>
          </div>
        }

      </div>

      {showDeleteModal && <DeleteModal text='Вы уверены, что хотите удалить проект?'
        deleteDispatch={handleDeleteOrganization}
        showModal={showDeleteModal}
        setShowModal={handleCloseDeleteModal}
        userId={id}
      />}
      {showEditModal && <FormModal
        title="Редактировать"
        showModal={showEditModal}
        setShowModal={handleCloseEditModal}
      >
        <ProjectEditForm closeDetailsModal={closeDetailsModal} project={project} closeModal={handleCloseEditModal}/>
      </FormModal>}
    </>

  );
};

export default ProjectDetails;
