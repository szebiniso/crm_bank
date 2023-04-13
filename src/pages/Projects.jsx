import React, {useState} from "react";
import ProjectsList from "../entities/Projects/ui/ProjectsList";
import FormModal from "../widgets/Modals/ui/FormModal";
import ProjectCreateForm from "../entities/Projects/ui/ProjectCreateForm";
import Header from "../shared/ui/Header";
import Container from "../shared/ui/Container";

const Projects = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const role = localStorage.getItem('role')

  const handleCloseCreateModal = () => {
    setShowCreateModal(false)
  }

  return (
    <>
      <Container>
        {
          role === 'Менеджер' ? <Header title='Существующие проекты' onChange={() => setShowCreateModal(true)}/> : <Header title='Существующие проекты' onChange={() => setShowCreateModal(true)} isButtonExist='true'/>
        }
          <ProjectsList/>
      </Container>

      <FormModal full_height='true'
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
