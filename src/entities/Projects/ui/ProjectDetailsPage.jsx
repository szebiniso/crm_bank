import React, {useEffect} from 'react';
import Donut from "../../../shared/ui/ProjectChart";
import IterationsContainer from "../../Iterations/ui/IterationsContainer";
import Files from "./Files";
import IterationsChart from "../../Iterations/ui/IterationsChart";
import {useDispatch, useSelector} from "react-redux";
import {getProjectById} from "../api/ProjectsSliceFunctions";
import {useParams} from "react-router-dom";
import Header from "../../../shared/ui/Header";

const ProjectDetailsPage = () => {

  const dispatch = useDispatch()
  const {projectById} = useSelector(state => state.projects)
  const {iterations} = useSelector(state => state.iterations)
  const {id} = useParams()

  console.log('bbid', projectById)

  useEffect(() => {
    dispatch(getProjectById(id))
  }, []);

  let numberOfCompletedIterations = 0

  iterations.forEach(iteration => {
    if(iteration.is_completed) numberOfCompletedIterations++
  })

  const percentOfCompletedIterations = Math.ceil((numberOfCompletedIterations * 100) / iterations.length)


  return (
    <>
      <div className="mx-7 mb-4 w-full lg:mb-4">
      <Header title={projectById.name}/>
    </div>
      <div className='mx-12'>
        <p className='text-gray-300 text-xl mb-3 leading-6'>{projectById.description}. Большая база качественных авторских фотографий и изображений. Гарантия уникальности фотоконтента от сервиса eTXT. Десятки тематических категорий, удобный поиск по ключевым словам и покупка в один клик. Сделайте свой контент на сайте полностью уникальным. Текст — это законченное высказывание в виде нескольких предложений или абзацев, связанных общей темой и основной мыслью грамматически. Текст — это законченное высказывание в виде нескольких предложений или абзацев, связанных общей темой и основной мыслью грамматически.</p>
        <p className='text-gray-300 text-xl mb-3 leading-5'>Дата:  <span className='font-bold'>  {projectById.start_date} - {projectById.end_date}</span></p>
        <p className='text-gray-300 text-xl mb-3 leading-5'>Бюджет: <span className='font-bold'>{projectById.budget}$</span></p>
        <Files files={projectById.files}/>
        <h3 className='text-gray-300 mt-10 font-bold leading-5 text-2xl'>Итерации</h3>
        <div className='flex items-center my-8'>
          <IterationsChart/>
          <Donut iterations={iterations} numberOfCompleted={numberOfCompletedIterations} percent={percentOfCompletedIterations}/>
        </div>
        <IterationsContainer/>
      </div>
    </>

  );
};

export default ProjectDetailsPage;
