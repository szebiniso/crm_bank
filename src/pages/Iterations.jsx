import React, { useState} from "react";
import HeaderWithOptions from "../shared/ui/HeaderWithOptions";
import FormModal from "../widgets/Modals/ui/FormModal";
import Header from "../shared/ui/Header";
import Container from "../shared/ui/Container";
import UserCreateForm from "../entities/ProjectManagers/ui/ProjectManagerCreateForm";

const Iterations = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCloseCreateModal = () => {
    setShowCreateModal(false)
  }

  return (
    <>
      <Container>
        <div className="mx-auto mb-8 w-full lg:mb-12">
          <Header title='Итерации' onChange={() => setShowCreateModal(true)} isButtonExist='true'/>
          <hr className="my-4 [height:1px] border-none bg-gray-700" />
          <HeaderWithOptions />
        </div>
        {/*<OrganizationList/>*/}
      </Container>

      <FormModal
        title="Создать итерацию"
        showModal={showCreateModal}
        setShowModal={handleCloseCreateModal}
      >
        <UserCreateForm closeModal={handleCloseCreateModal}/>
      </FormModal>
    </>
  );
};

export default Iterations;
