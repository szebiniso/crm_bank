import React, { useState } from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import DeleteModal from "../../../widgets/Modals/ui/DeleteModal";
import EditModal from "../../../widgets/Modals/ui/EditModal";
import UserCreateForm from "./UserCreateForm";
import FormModal from "../../../widgets/Modals/ui/FormModal";
import UserEditForm from "./UserEditForm";

const UserCard = ({user}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userId, setUserId] = useState(77);

  const {id, first_name, last_name, position} = user

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
      <div className="cursor-pointer flex flex-col align-middle items-center justify-center mb-8">
        <div className="group h-72 w-64 [perspective:1000px]">
          <div className="flex justify-center items-center relative bg-main-light-dark h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div>
              <img
                className="object-cover mx-auto mb-4 w-36 h-36 rounded-full"
                alt="#"
                src="https://aif-s3.aif.ru/images/019/507/eeba36a2a2d37754bab8b462f4262d97.jpg"
              />
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-300 dark:text-white">
                {first_name} <br /> {last_name}
              </h3>
              <p>{position}</p>
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-500 px-12 text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">{first_name} {last_name}</h1>
                <p className="text-lg">{position}</p>
                <p className="text-base">
                  Lorem lopdfndfjdk fkjd jdjfkd ss sdd
                </p>
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
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && <DeleteModal
          showModal={showDeleteModal}
          setShowModal={() => setShowDeleteModal(false)}
          userId={id}
      />}
      {showEditModal && <FormModal
          title="Редактировать"
          showModal={showEditModal}
          setShowModal={handleCloseEditModal}
      >
        <UserEditForm userId={id} closeModal={handleCloseEditModal}/>
      </FormModal>}
    </>
  );
};

export default UserCard;
