import React, {useState} from 'react';
import IterationTask from "./IterationTask";
import FormModal from "../../../widgets/Modals/ui/FormModal";
import ProjectEditForm from "../../Projects/ui/ProjectEditForm";
import {useDispatch} from "react-redux";
import DatePicker from "../../../shared/ui/DatePicker";

const IterationCard = ({iteration}) => {

  const {start_date, end_date, project} = iteration

  const [showEditModal, setShowEditModal] = useState(false);


  const dispatch = useDispatch()

  const handleOpenEditModal = () => {
    setShowEditModal(true)
  }

  const handleCloseEditModal = () => {
    setShowEditModal(false)
  }

  return (
    <>
      <div className='bg-[#262f40] w-80 p-4 ml-2 rounded'>
        <div className='flex justify-between items-center'>
          <h3 className='font-bold text-xl text-gray-300'>Название итерации</h3>
          {/*<PencilSquareIcon onClick={handleOpenEditModal} className="h-6 w-6 text-gray-300" />*/}
        </div>
        <DatePicker iteration={iteration}/>

        <div className='h-[70vh] overflow-y-auto'>
          <IterationTask/>
          <IterationTask/>
          <IterationTask/>
          <IterationTask/>
        </div>
      </div>

      {showEditModal && <FormModal
        title="Редактировать"
        showModal={showEditModal}
        setShowModal={handleCloseEditModal}
      >
        <ProjectEditForm project={project} closeModal={handleCloseEditModal}/>
      </FormModal>}
    </>

  );
};

export default IterationCard;
