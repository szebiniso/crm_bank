import React, {useState} from "react";
import Header from "../../../shared/ui/Header";
import Container from "../../../shared/ui/Container";
import ArchivedProjectListt from "./ArchivedProjectListt";
import FormModal from "../../../widgets/Modals/ui/FormModal";
import ProjectCreateForm from "./ProjectCreateForm";
import {useNavigate} from "react-router-dom";

const ArchivedProjects = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const role = localStorage.getItem('role')
  const navigate = useNavigate()

  const handleCloseCreateModal = () => {
    setShowCreateModal(false)
  }

  return (
    <>
      <Container>
        {
          role === 'Менеджер' ? <Header isManagerProjectsArchive='true' title='Архив' onChange={() => navigate('/main/projects')}/> : <Header navigateToActiveAdmin={() => navigate('/main/projects')} title='Архив' onChange={() => setShowCreateModal(true)} isAdminProjectsArchived='true'/>
        }
        <div className='flex gap-8 mb-4 w-full'>
          <ArchivedProjectListt/>
        </div>

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

export default ArchivedProjects;
