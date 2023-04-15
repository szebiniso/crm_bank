import React, { useState } from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import DeleteModal from "../../../widgets/Modals/ui/DeleteModal";
import FormModal from "../../../widgets/Modals/ui/FormModal";
import {deleteUser} from "../../Users/api/UsersSliceFunctions";
import {useDispatch} from "react-redux";
import ProjectManagerEditForm from "./ProjectManagerEditForm";
import {truncateString} from "../../../shared/utils/truncateString";

const ProjectManagerCard = ({user}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userId, setUserId] = useState(77);

  const dispatch = useDispatch()

  const {id, first_name, last_name, email, phone_number} = user


  const handleOpenDeleteModal = (id) => {
    setUserId(id)
    setShowDeleteModal(true)
  }

  const handleCloseDeleteModal = (id) => {
    setUserId(id)
    setShowDeleteModal(false)
  }

  const handleOpenEditModal = (id) => {
    setUserId(id)
    setShowEditModal(true)
  }

  const handleCloseEditModal = () => {
    setShowEditModal(false)
  }

  const handleDeleteProjectManager = () => {
    const data = {id: id, handleCloseDeleteModal}
    dispatch(deleteUser(data))
  }

  return (
    <>
      <div className="cursor-pointer flex flex-col align-middle items-center justify-center mb-6">
        <div className="group h-52 w-52 [perspective:1000px]">
          <div className="flex justify-center items-center relative bg-main-light-dark h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div>
              <img
                className="object-cover mx-auto mb-2 w-24 h-24 rounded-full"
                alt="#"
                src="https://aif-s3.aif.ru/images/019/507/eeba36a2a2d37754bab8b462f4262d97.jpg"
              />
              <h3 className="text-xl font-bold tracking-tight text-gray-400 dark:text-white">
                {first_name} <br /> {last_name}
              </h3>
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-500 px-12 text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <p className="text-xl font-bold">{first_name}</p>
                <p className="text-xl font-bold">{last_name}</p>
                <p className="text-lg ">{truncateString(email, 22)}</p>
                <p className="text-base">
                  {phone_number}
                </p>
                <div className="mt-4 flex">
                  <button
                    onClick={handleOpenDeleteModal}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    <TrashIcon className="h-5 w-5 text-gray-100" />
                  </button>
                  <button
                    onClick={handleOpenEditModal}
                    type="button"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    <PencilSquareIcon className="h-5 w-5 text-gray-100" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && <DeleteModal
          deleteDispatch={handleDeleteProjectManager}
          text='Вы уверены, что хотите удалить данного менеджера?'
          showModal={showDeleteModal}
          setShowModal={() => setShowDeleteModal(false)}
          userId={id}
      />}
      {showEditModal && <FormModal full_height='true'
          title="Редактировать"
          showModal={showEditModal}
          setShowModal={handleCloseEditModal}
      >
        <ProjectManagerEditForm user={user} closeModal={handleCloseEditModal}/>
      </FormModal>}
    </>
  );
};

export default ProjectManagerCard;
