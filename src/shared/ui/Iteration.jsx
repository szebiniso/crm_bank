import React, {useEffect, useState} from 'react';
import {CheckCircleIcon, XCircleIcon} from "@heroicons/react/20/solid";
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";
import EditIteration from "../../entities/Iterations/ui/EditIteration";
import FormModal from "../../widgets/Modals/ui/FormModal";
import {useDispatch, useSelector} from "react-redux";
import {deleteIteration} from "../../entities/Iterations/api/IterationApi";
import {useParams} from "react-router-dom";
import CircleProgressBar from "./CircleProgressBar";

const Iteration = ({iteration, setIterationId, activeIterationId}) => {

  const role = localStorage.getItem('role')

  const dispatch = useDispatch()
  const [editIterationModal, setEditIterationModal] = useState(false);

  const {allTasks} = useSelector(state => state.iterations)
  const tasks = allTasks.filter(task => task.iteration_id.id === iteration.id)
  const isTasksCompleted = tasks.every(task => task.is_finished === true)

  let numberOfCompletedTasks = 0
  tasks.forEach(task => {
    if(task.is_finished === true) numberOfCompletedTasks++
  })

  let percentOfCompletedTasks = Math.ceil((numberOfCompletedTasks * 100) / tasks.length)

  useEffect(() => {
    percentOfCompletedTasks = Math.ceil((numberOfCompletedTasks * 100) / tasks.length)
  }, [numberOfCompletedTasks]);

  const handleCloseEditsModal = () => {
    setEditIterationModal(false)
  }

  const {id} = useParams()

  const handleOpenEditsModal = () => {
    setEditIterationModal(true)
  }

  const handleDeleteIteration = () => {
    dispatch(deleteIteration({iteration_id: iteration.id, project_id: id}))
  }

  return (
    <>
      <div onClick={() => setIterationId(iteration.id)} style={iteration.id === activeIterationId ? {border: '2px solid #1f5781', background: '#16243c', opacity: '100'} : {opacity: '30'}} className='border border-2 border-gray-800 p-2 m-2 flex justify-between cursor-pointer rounded hover:border-[#1f5781] hover:border-2'>
        <div className='flex items-center'>
          {
            iteration.is_completed && isTasksCompleted && <CheckCircleIcon className="h-7 w-7 text-[#1f99f5]" />
          }
          {
            iteration.is_completed && !isTasksCompleted && <XCircleIcon className="h-7 w-7 text-red-500" />
          }
          {
            !iteration.is_completed && tasks.length > 0 && <CircleProgressBar percent={percentOfCompletedTasks}/>
          }
          {
            !tasks.length && <CircleProgressBar percent={0}/>
          }
          <label htmlFor="default-checkbox" className="ml-2 text-gray-300 font-bold dark:text-gray-300">{iteration.name}</label>
        </div>
        <div className='flex items-center gap-1.5'>
          <p className='mx-3 font-medium text-gray-300'>{iteration.start_date} - {iteration.end_date}</p>
          {
            role === 'Менеджер' && <>
              <PencilSquareIcon onClick={handleOpenEditsModal} className="h-5 w-5 text-gray-300 cursor-pointer" />
              <TrashIcon onClick={handleDeleteIteration} className="h-5 w-5 text-red-500 cursor-pointer" />
            </>
          }
        </div>
      </div>
      {
        editIterationModal && <FormModal
          title='Редактировать'
          showModal={editIterationModal}
          setShowModal={handleCloseEditsModal}
        >
          <EditIteration iteration={iteration} closeModal={handleCloseEditsModal}/>
        </FormModal>
      }
    </>
  );
};

export default Iteration;
