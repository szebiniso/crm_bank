import React, {useState} from "react";
import ProjectsList from "../entities/Projects/ui/ProjectsList";
import FormModal from "../widgets/Modals/ui/FormModal";
import ProjectCreateForm from "../entities/Projects/ui/ProjectCreateForm";
import Header from "../shared/ui/Header";
import Container from "../shared/ui/Container";
import ProjectListt from "../entities/Projects/ui/ProjectListt";
import Profile from "../entities/Projects/ui/Profile";
import ArchivedProjects from "../entities/Projects/ui/ArchivedProjects";
import ArchivedProjectListt from "../entities/Projects/ui/ArchivedProjectListt";
import {useNavigate} from "react-router-dom";

const Projects = () => {
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
          role === 'Менеджер' ? <Header isManagerProjects='true' title='Проекты' onChange={() => navigate('/main/archived_projects')}/> : <Header title='Проекты' navigateToArchiveAdmin={() => navigate('/main/archived_projects')} onChange={() => setShowCreateModal(true)} isAdminProjects='true'/>
        }
          {/*<ProjectsList/>*/}
        <div className='flex gap-8 mb-4 w-full'>
          <ProjectListt/>
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

export default Projects;
