import React, {useState} from "react";
import ProjectsList from "../entities/Projects/ui/ProjectsList";
import FormModal from "../widgets/Modals/ui/FormModal";
import ProjectCreateForm from "../entities/Projects/ui/ProjectCreateForm";
import Header from "../shared/ui/Header";
import Container from "../shared/ui/Container";

const Projects = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCloseCreateModal = () => {
    setShowCreateModal(false)
  }

  return (
    <>
      <Container>
          <Header title='Существующие проекты' onChange={() => setShowCreateModal(true)} isButtonExist='true'/>
          <ProjectsList/>
      </Container>

      <FormModal
        title="Создать проект"
        showModal={showCreateModal}
        setShowModal={handleCloseCreateModal}
      >
        <ProjectCreateForm closeModal={handleCloseCreateModal}/>
      </FormModal>
    </>
  );
};

export default Projects;
