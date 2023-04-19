import React, {useEffect, useState} from 'react';
import IterationCard from "./IterationCard";
import {useDispatch, useSelector} from "react-redux";
import {getIterations} from "../api/IterationApi";

const IterationList = ({projectId}) => {

  const dispatch = useDispatch()
  const {iterations} = useSelector(state => state.iterations)
  console.log('ddd', iterations)

  const [iterationsById, setIterationsById] = useState(iterations);

console.log(projectId)
  useEffect(() => {
    setIterationsById(iterations.filter(i => i.project.id == projectId))
  }, [projectId, iterations]);

  console.log(iterationsById)

  useEffect(() => {
    dispatch(getIterations())
  }, [])


  return (
    <div className='flex h-[84vh] gap-2 m-4 overflow-x-scroll'>
      {
        iterationsById.map(iteration => {
          return <IterationCard iteration={iteration}/>
        })
      }
    </div>
  );
};

export default IterationList;
