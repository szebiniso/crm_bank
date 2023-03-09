import React, {useEffect, useState} from "react";
import UserCard from "./UserCard";
import { UserPlusIcon } from "@heroicons/react/20/solid";
import UsersHeader from "../../../shared/ui/UsersHeader";
import UserCreateForm from "./UserCreateForm";
import FormModal from "../../../widgets/Modals/ui/FormModal";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../api/UsersSliceFunctions";

const UsersList = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const dispatch = useDispatch()
  const {users} = useSelector(store => store.users)

  const handleCloseCreateModal = () => {
    setShowCreateModal(false)
  }

  useEffect(() => {
    !users.length && dispatch(getUsers())
  }, [])

  console.log(users)

  return (
    <>
      <section className="w-full h-screen bg-main_blue overflow-auto">
        <div className="py-8 bg-main_blue px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-16">
          <div className="mx-auto mb-8 w-full lg:mb-12">
            <div className="flex justify-between items-baseline">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-300 dark:text-white">
                Исполнители
              </h2>
              <button
                onClick={() => setShowCreateModal(true)}
                type="button"
                className="flex items-center bg-blue-900 justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                <UserPlusIcon className="h-6 w-6 text-gray-100 mr-2" />
                Создать
              </button>
            </div>
            <hr className="my-4 [height:1px] border-none bg-gray-700" />
            <UsersHeader />
          </div>
          <div className="grid gap-8 lg:gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {users.map(user => {
              return <div key={user.id} className="text-center text-gray-500 dark:text-gray-400">
                <UserCard user={user}/>
              </div>
            })}
          </div>
        </div>
      </section>
      <FormModal
        title="Создать исполнителя"
        showModal={showCreateModal}
        setShowModal={handleCloseCreateModal}
      >
        <UserCreateForm closeModal={handleCloseCreateModal}/>
      </FormModal>
    </>
  );
};

export default UsersList;
