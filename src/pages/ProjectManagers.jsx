import React, {useState} from "react";
import Container from "../shared/ui/Container";
import FormModal from "../widgets/Modals/ui/FormModal";
import Header from "../shared/ui/Header";
import HeaderWithOptions from "../shared/ui/HeaderWithOptions";
import ProjectManagersList from "../entities/ProjectManagers/ui/ProjectManagersList";
import ProjectManagerCreateForm from "../entities/ProjectManagers/ui/ProjectManagerCreateForm";

const ProjectManagers = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCloseCreateModal = () => {
    setShowCreateModal(false)
  }
  return (
    <>
      <Container>
        <div className="mx-auto mb-8 w-full lg:mb-7">
          <Header title='Проект менеджеры' onChange={() => setShowCreateModal(true)} isButtonExist='true'/>
          <hr className="my-4 [height:1px] border-none bg-gray-700" />
          <HeaderWithOptions />
        </div>

        <ProjectManagersList/>

        <FormModal full_height='true'
          title="Создать менеджера"
          showModal={showCreateModal}
          setShowModal={handleCloseCreateModal}
        >
          <ProjectManagerCreateForm closeModal={handleCloseCreateModal}/>
        </FormModal>
      </Container>
    </>
  );
};

export default ProjectManagers;
