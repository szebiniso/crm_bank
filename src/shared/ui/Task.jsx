import React, {useState} from 'react';
import {PaperAirplaneIcon} from "@heroicons/react/20/solid";
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";
import {deleteTask, editTaskApi} from "../../entities/Iterations/api/IterationApi";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";

const Task = ({iteration_id, task, iterationById}) => {

  const role = localStorage.getItem('role')

  const dispatch = useDispatch()
  const {tasks} = useSelector(state => state.iterations)

  const [editTaskId, setEditTaskId] = useState(null);
  const [editTask, setEditTask] = useState(false);
  const [isEditedName, setIsEditedName] = useState(false);

  const {id} = useParams()

  const handleDeleteTask = (id) => {
    dispatch(deleteTask({iteration_id: iteration_id, id}))
  }

  const handleEditTaskInput = (id) => {
    setEditTaskId(id)
    setEditTask(!editTask)
  }

  // const handleEditTaskButton = (id) => {
  //   setEditTaskId(null)
  //   setEditTask(!editTask)
  // }

  const handleCheckboxChange = async (taskId) => {
    let status = true
    try {
      tasks.forEach(task => {
        if (task.id === taskId) {
          status = !task.is_finished
        }
      });

      dispatch(editTaskApi({
        id: taskId,
        data: {is_finished: status},
        iteration_id: iteration_id
      }))
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  // const handleSubmit = (values) => {
  //   console.log('dirty: ', values.dirty)
  //   if (values.dirty) {
  //     dispatch(editTaskApi({id: values.id, iteration_id: iteration_id.iteration_id, data: {name: values.name}}))
  //     setEditTaskId(null)
  //     setEditTask(!editTask)
  //   } else {
  //     setEditTaskId(null)
  //     setEditTask(!editTask)
  //   }
  // };

  const formik = useFormik({
    initialValues: task,
    enableReinitialize: true,
    onSubmit: values => {
      dispatch(editTaskApi({id: values.id, iteration_id: iteration_id, data: {name: values.name}}))
      setEditTaskId(null)
      setEditTask(!editTask)
    }
  })

  return (
    <li>
      <form className='py-3 h-14 flex justify-between border-b-[1px] border-gray-800' onSubmit={formik.handleSubmit}>
        <div className='flex items-center'>
          <input disabled={iterationById[0]?.is_completed || role === 'Админ'} onChange={() => handleCheckboxChange(task.id)} checked={task.is_finished} id="default-checkbox" type="checkbox" value="" className="w-5 h-5 text-[#1f99f5] bg-gray-300 cursor-pointer border-gray-300 rounded focus:ring-blue-300"/>
          {/*<label htmlFor="default-checkbox" className="ml-2 font-medium text-gray-300">{iteration.name}</label>*/}
          <input onChange={formik.handleChange} name='name' style={task.id === editTaskId && editTask ? {border: '1px solid gray'} : null} disabled={task.id === editTaskId && editTask ? false : true} type='text'  className='p-1 ml-1 border-none font-medium text-gray-300 bg-transparent' value={formik.values.name}/>
        </div>
        {
          role === "Менеджер" && <div className='flex items-center gap-2'>
            {
              task.id === editTaskId && editTask ? <button type='submit' className="h-6 w-6 text-blue-500 cursor-pointer" >send</button> : <>
                <PencilSquareIcon onClick={() => handleEditTaskInput(task.id)} className="h-5 w-5 text-gray-300 cursor-pointer" />
                <TrashIcon onClick={() => handleDeleteTask(task.id)} className="h-5 w-5 text-red-500 cursor-pointer" />
              </>
            }
          </div>
        }
      </form>
    </li>
  );
};

export default Task;
