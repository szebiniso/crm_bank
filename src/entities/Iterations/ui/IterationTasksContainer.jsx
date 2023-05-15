import React, {useEffect, useState} from 'react';
import {
  PaperAirplaneIcon,
  PlusIcon,
  XMarkIcon
} from "@heroicons/react/20/solid";
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
  completeIteration,
  createTask,
  deleteTask,
  editTaskApi,
  getAllTasks,
  getIterationById
} from "../api/IterationApi";
import Task from "../../../shared/ui/Task";

const IterationTasksContainer = (iteration_id) => {

  const dispatch = useDispatch()
  const {tasks, iterations} = useSelector(state => state.iterations)

  const [sendButton, setSendButton] = useState(false);
  const [taskName, setTaskName] = useState('');

  const {id} = useParams()

  const handleCompleteIteration = () => {
    dispatch(completeIteration({project_id: id, iteration_id: iteration_id.iteration_id}))
  }

  useEffect(() => {
    dispatch(getAllTasks())
  }, []);

  const iterationById = iterations.filter(iteration => iteration.id === iteration_id.iteration_id)
  console.log('iteration', iterationById)
  const handleSendButton = () => {
    if(taskName.length) {
      dispatch(createTask({'iteration_id': iteration_id.iteration_id, name: taskName}))
      setSendButton(false)
      setTaskName('')
    }
  }
  const handleAddButton = () => {
    setSendButton(true)
  }

  return (
    <div className='h-full relative'>

      <ul className='p-4 w-full h-72 overflow-y-auto'>
        {
          tasks.map(task => (
            <Task iteration_id={iteration_id} task={task}/>
          ))
        }
      </ul>
      <div className='flex gap-1 items-center absolute -bottom-4  w-full p-6'>
        {
          sendButton ? <>
            <input onChange={(e) => setTaskName(e.target.value)}  className='w-full py-2 border border-[#26416a] rounded bg-transparent text-gray-200 focus:border-blue-300 focus:outline-0' type='text' placeholder='Введите название...' />
            <PaperAirplaneIcon onClick={handleSendButton} className="h-8 w-8 text-blue-500 cursor-pointer" />
            <XMarkIcon onClick={() => setSendButton(false)} className="h-8 w-8 text-blue-500 cursor-pointer" />
          </> : <>
            <button style={iterationById[0]?.is_completed ? {visibility: 'hidden'} : null} onClick={handleCompleteIteration} type="button"
                    className="w-full text-white mr-2 float-right bg-gradient-to-r from-blue-900 to-cyan-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded text-sm px-5 py-2.5 text-center">
              Завершить итерацию
            </button>
            <PlusIcon style={iterationById[0]?.is_completed ? {visibility: 'hidden'} : null} onClick={handleAddButton} className="h-10 w-10 text-gray-300 bg-gray-800 rounded cursor-pointer" />
          </>
        }
      </div>
    </div>
  );
};

export default IterationTasksContainer;
