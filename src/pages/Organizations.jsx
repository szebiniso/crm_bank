import React, { useState} from "react";
import HeaderWithOptions from "../shared/ui/HeaderWithOptions";
import FormModal from "../widgets/Modals/ui/FormModal";
import Header from "../shared/ui/Header";
import Container from "../shared/ui/Container";
import OrganizationList from "../entities/Organization/ui/OrganizationList";
import OrganizationWithAdminCreateForm from "../entities/Organization/ui/OrganizationWithAdminCreateForm";

const Organizations = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCloseCreateModal = () => {
    setShowCreateModal(false)
  }

  return (
    <>
      <Container>
        <div className="mx-auto mb-8 w-full lg:mb-7">
          <Header title='Организации' onChange={() => setShowCreateModal(true)} isButtonExist='true'/>
          <hr className="my-4 [height:1px] border-none bg-gray-700" />
          <HeaderWithOptions />
        </div>
        <OrganizationList/>
      </Container>

      <FormModal
        full_height='true'
        // title="Создать"
        showModal={showCreateModal}
        setShowModal={handleCloseCreateModal}
      >
        <OrganizationWithAdminCreateForm closeModal={handleCloseCreateModal}/>
      </FormModal>
    </>
  );
};

export default Organizations;
