import React, {useState} from 'react';
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/solid";
import DeleteModal from "../../../widgets/Modals/ui/DeleteModal";
import FormModal from "../../../widgets/Modals/ui/FormModal";
import UserEditForm from "../../Users/ui/UserEditForm";
import EditOrganization from "./EditOrganization";

const OrganizationDetails = () => {

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userId, setUserId] = useState(77);


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

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <h3>Название</h3>
        <p>Тип деятельности</p>
        <p>Описание к данной организации</p>
        <p>organization04@gmail.com</p>
        <p>+996 775 88 96 73</p>
        <div className="mt-4">
          <button
            onClick={handleOpenDeleteModal}
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            <TrashIcon className="h-6 w-6 text-gray-100" />
          </button>
          <button
            onClick={handleOpenEditModal}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <PencilSquareIcon className="h-6 w-6 text-gray-100" />
          </button>
        </div>
      </div>

      {showDeleteModal && <DeleteModal
        showModal={showDeleteModal}
        setShowModal={() => setShowDeleteModal(false)}
        // userId={id}
      />}
      {showEditModal && <FormModal
        full_height='true'
        title="Редактировать"
        showModal={showEditModal}
        setShowModal={handleCloseEditModal}
      >
        <EditOrganization closeModal={handleCloseEditModal}/>
      </FormModal>}
    </>

  );
};

export default OrganizationDetails;
