import React, {useEffect, useState} from "react";
import Button from "../../../shared/ui/Button";
import { useFormik } from "formik";
import {useDispatch, useSelector} from "react-redux";
import Input from "../../../shared/ui/Input";
import {UserIcon, PencilIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import InputTextArea from "../../../shared/ui/InputTextArea";
import {getProjects} from "../../Projects/api/ProjectsSliceFunctions";
import {createIteration} from "../api/IterationApi";
import {CalendarDaysIcon, Square2StackIcon} from "@heroicons/react/24/outline";

export default function IterationCreateForm({closeModal}) {

  const dispatch = useDispatch()
  const userId = localStorage.getItem('userId')

  const {projects} = useSelector(state => state.projects)
  const {loading} = useSelector(state => state.projects)

  const projectsById = projects.filter(project => project.manager == userId)

  useEffect(() => {
    dispatch(getProjects())
  }, []);


  console.log('admins', projects)
  const formik = useFormik({
    initialValues: {
      project: null,
      start_date: null,
      end_date: null
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      const data = {values, closeModal}
      dispatch(createIteration(data))
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-center "
        action="src/entities/Users/ui#"
      >
        <div className="w-full flex flex-col gap-7 z-10">
          <div className='border-y border-gray-500'>
            <div className="flex items-center bg-transparent w-full border-x-2 border-[#3e9db4] m-auto h-full">
              <Square2StackIcon className="h-5 text-gray-400 px-2" />
              <div className='flex flex-col w-full border-x border-gray-500'>
                <label
                  htmlFor="first-name"
                  className="text-sm pl-3 py-1 border-b border-gray-500 font-bold text-[#b99a47] md:pl-1 lg:pl-1 xl:pl-2"
                >
                  Проект
                </label>
                <select
                  onChange={formik.handleChange}
                  name="project"
                  className="w-full max-h-10 overflow-auto bg-transparent focus:ring-blue-500 border-none outline-none text-gray-300 md:p-1 lg:p-2 2xl:p-2 md:text-1 lg:text-1 xl:text-1 "
                >
                  <option className='text-gray-200 bg-gray-700' value=""></option>
                  {
                    projectsById.map(project => {
                      return <option className='text-gray-200 bg-gray-700' value={project.id}> {project.name}</option>
                    })
                  }
                </select>
              </div>
            </div>
          </div>

          <Input onChange={formik.handleChange} type='date' placeholder='' name='start_date' label='Дата начало' >
            <CalendarDaysIcon className="h-5 text-gray-400 px-2" />
          </Input>

          <Input onChange={formik.handleChange} type='date' placeholder='' name='end_date' label='Дата окончания' >
            <CalendarDaysIcon className="h-5 text-gray-400 px-2" />
          </Input>

          {
            loading ? <Button disabled type="button" loading='true'/> : <Button type="submit" text='Создать'/>
          }

        </div>
      </form>
    </>
  );
}
