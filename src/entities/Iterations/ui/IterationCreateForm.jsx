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
import {useParams} from "react-router-dom";
import {Bars2Icon} from "@heroicons/react/20/solid";

export default function IterationCreateForm({closeModal}) {

  const dispatch = useDispatch()
  const userId = localStorage.getItem('userId')

  const {id} = useParams()

  const {projects} = useSelector(state => state.projects)
  const {loading} = useSelector(state => state.projects)

  const projectsById = projects.filter(project => project.manager == userId)

  useEffect(() => {
    dispatch(getProjects())
  }, []);


  console.log('admins', projects)
  const formik = useFormik({
    initialValues: {
      project: id,
      start_date: null,
      end_date: null
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      const data = {values, closeModal, id}
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
          <Input onChange={formik.handleChange} type='text' placeholder='Введите название' name='name' label='Название' >
            <Bars2Icon className="h-5 text-gray-400 px-2" />
          </Input>

          <Input onChange={formik.handleChange} type='date' placeholder='' name='start_date' label='Дата начала' >
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
