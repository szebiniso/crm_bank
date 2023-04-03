import React, {useState} from "react";
import UsersList from "../entities/Users/ui";
import Container from "../shared/ui/Container";
import UserCreateForm from "../entities/Users/ui/UserCreateForm";
import FormModal from "../widgets/Modals/ui/FormModal";
import Header from "../shared/ui/Header";
import HeaderWithOptions from "../shared/ui/HeaderWithOptions";

const Users = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCloseCreateModal = () => {
    setShowCreateModal(false)
  }
  return (
    <>
      <Container>
        <div className="mx-auto mb-8 w-full lg:mb-12">
          <Header title='Исполнители' onChange={() => setShowCreateModal(true)} isButtonExist='true'/>
          <hr className="my-4 [height:1px] border-none bg-gray-700" />
          <HeaderWithOptions />
        </div>

        <UsersList/>

        <FormModal
          title="Создать исполнителя"
          showModal={showCreateModal}
          setShowModal={handleCloseCreateModal}
        >
          <UserCreateForm closeModal={handleCloseCreateModal}/>
        </FormModal>
      </Container>
    </>
  );
};

export default Users;
