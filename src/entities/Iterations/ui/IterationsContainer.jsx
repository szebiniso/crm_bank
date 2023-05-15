import React, {useEffect, useState} from 'react';
import {CheckCircleIcon} from "@heroicons/react/20/solid";
import IterationTasksContainer from "./IterationTasksContainer";
import FormModal from "../../../widgets/Modals/ui/FormModal";
import IterationCreateForm from "./IterationCreateForm";
import {getIterations, getTasks} from "../api/IterationApi";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";
import Iteration from "../../../shared/ui/Iteration";

const IterationsContainer = () => {

  const dispatch = useDispatch()
  const {iterations} = useSelector(state => state.iterations)

  const [createFormModal, setCreateFormModal] = useState(false);
  const [iterationId, setIterationId] = useState(null);
  const [activeIterationId, setActiveIterationId] = useState(null);

  const {id} = useParams()

  useEffect(() => {
    dispatch(getTasks(iterationId))
  }, [iterationId]);

  useEffect(() => {
    dispatch(getTasks(iterations[0]?.id))
    setActiveIterationId(iterations[0]?.id)
  }, [iterations]);

  console.log('ddd', iterations)

  const handleCloseDetailsModal = () => {
    setCreateFormModal(false)
  }

  useEffect(() => {
    dispatch(getIterations(id))
  }, [])

  return (
    <>
      <div className='pb-8'>
        <div className='text-gray-200 text-lg font-bold flex justify-between items-center border border-gray-800 rounded-t'>
          <div className='p-4 w-1/2 text-center border-gray-800 border-r'>Итерации</div>
          <div className='p-4 w-1/2 text-center border-gray-800'>Цели</div>
        </div>
        <div className='flex w-full border border-gray-800 h-[400px] rounded-b '>
          <div className='m-2 w-1/2 rounded relative'>
            <ul className=' h-72 overflow-y-auto'>
              {
                iterations.map(iteration => (
                  <li onClick={() => setActiveIterationId(iteration.id)}>
                    <Iteration activeIterationId={activeIterationId} iteration={iteration} setIterationId={setIterationId}/>
                  </li>

                ))
              }
            </ul>
            <button onClick={() => setCreateFormModal(true)} className='w-[97%] bg-[#182434] rounded border border-blue-900 text-blue-400 p-2 m-2 absolute bottom-0 cursor-pointer'>Создать итерацию</button>
            {/*<PlusIcon className="h-8 w-8 text-gray-300 bg-blue-500 rounded-2xl" />*/}
          </div>
          <hr className='bg-gray-800 h-[92%] mt-4 w-0.5 border-t-gray-800'/>
          <div className='m-2 w-1/2'>
            <IterationTasksContainer iteration_id={iterationId}/>
          </div>
        </div>
      </div>

      createFormModal && <FormModal
      title='Создать итерацию'
      showModal={createFormModal}
      setShowModal={handleCloseDetailsModal}
    >
      <IterationCreateForm closeModal={handleCloseDetailsModal}/>
    </FormModal>
  </>

  );
};

export default IterationsContainer;
