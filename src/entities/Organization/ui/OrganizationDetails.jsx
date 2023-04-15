import React, {useState} from 'react';
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/solid";
import DeleteModal from "../../../widgets/Modals/ui/DeleteModal";
import FormModal from "../../../widgets/Modals/ui/FormModal";
import EditOrganization from "./EditOrganization";
import {useDispatch} from "react-redux";
import {deleteOrganization, deleteOrganizations} from "../api/OrganizationApi";
import {AtSymbolIcon, PhoneIcon} from "@heroicons/react/24/outline";

const OrganizationDetails = ({organization, closeDetailsModal}) => {

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
    const data = {id: organization.id, handleCloseDeleteModal}
    dispatch(deleteOrganization(data))
  }

  const {id, name, field, description, email, phone_number} = organization

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex items-center w-full gap-6'>
          <img className="object-cover w-20 h-20 rounded-full" src="https://media.istockphoto.com/id/1286680331/vector/adoption-and-community-care.jpg?s=612x612&w=0&k=20&c=ohbgHT14BhVVbVOc__N5MsBEfoM3EXwzLPxzIFeWHTI=" alt="Neil image"/>
          <div className='flex flex-col gap-1'>
            <h3 className='text-xl font-bold text-gray-300'>{name} компании</h3>
            <p className='text-md text-gray-300'>{field}</p>
          </div>
        </div>

        <p className='my-8 text-md text-gray-300'>{description}. Проверка текста на уникальность онлайн, точная и быстрая проверка покажет процент уникальности статьи для сайта или Яндекс Дзен.</p>
        <div className='text-gray-300 text-md flex flex-col gap-2 w-full'>
          <div className='flex gap-2'>
            <AtSymbolIcon className="h-6 w-6" />
            <p>{email}</p>
          </div>
          <div className='flex gap-2'>
            <PhoneIcon className="h-6 w-6 text-gray-300" />
            <p>{phone_number}</p>
          </div>
        </div>
        <div className="mt-8 flex justify-between gap-4 w-full">
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
      </div>

      {showDeleteModal && <DeleteModal text='Вы уверены, что хотите удалить организацию?'
        deleteDispatch={handleDeleteOrganization}
        showModal={showDeleteModal}
        setShowModal={handleCloseDeleteModal}
        userId={id}
      />}
      {showEditModal && <FormModal
        full_height='true'
        title="Редактировать"
        showModal={showEditModal}
        setShowModal={handleCloseEditModal}
      >
        <EditOrganization closeDetailsModal={closeDetailsModal} organization={organization} closeModal={handleCloseEditModal}/>
      </FormModal>}
    </>

  );
};

export default OrganizationDetails;
