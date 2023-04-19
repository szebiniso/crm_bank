import React, { useState} from "react";
import HeaderWithOptions from "../shared/ui/HeaderWithOptions";
import FormModal from "../widgets/Modals/ui/FormModal";
import Header from "../shared/ui/Header";
import Container from "../shared/ui/Container";
import IterationList from "../entities/Iterations/ui/IterationList";
import IterationCreateForm from "../entities/Iterations/ui/IterationCreateForm";

const Iterations = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [projectId, setProjectId] = useState(13);

  const handleCloseCreateModal = () => {
    setShowCreateModal(false)
  }

  return (
    <>
      <Container>
        <div className="mx-auto mb-4 w-full lg:mb-4">
          <Header setProjectId={setProjectId} title='Итерации' onChange={() => setShowCreateModal(true)} isButtonExist='true' iterationOptionBtn='true'/>
          {/*<hr className="my-4 [height:1px] border-none bg-gray-700" />*/}
          {/*<HeaderWithOptions />*/}
        </div>
        <IterationList projectId={projectId}/>
      </Container>

      <FormModal
        title="Создать итерацию"
        showModal={showCreateModal}
        setShowModal={handleCloseCreateModal}
      >
        <IterationCreateForm closeModal={handleCloseCreateModal}/>
      </FormModal>
    </>
  );
};

export default Iterations;
