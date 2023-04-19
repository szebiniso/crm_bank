import React, {useState} from 'react';
import {
  ArrowTrendingUpIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import Input from "../../../shared/ui/Input";
import {useDispatch, useSelector} from "react-redux";
import Button from "../../../shared/ui/Button";
import {useFormik} from "formik";
import InputTextArea from "../../../shared/ui/InputTextArea";
import {editProject} from "../api/ProjectsSliceFunctions";

const ProjectEditForm = ({closeModal, project, closeDetailsModal}) => {

  const statusObj = {
    Active: "В процессе",
    Completed: "Завершенный",
    Failed: "Незавершенный",
  }

  const dispatch = useDispatch()
  const {loading} = useSelector(state => state.projects)

  const formik = useFormik({
    initialValues: project,
    onSubmit: values => {
      console.log("edit", values)
      const data = {closeModal, values, closeDetailsModal}
      dispatch(editProject(data))
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col items-center ">
      <div className="w-full flex flex-col gap-7 z-10">
        <Input onChange={formik.handleChange} value={formik.values.name} type='text' placeholder='Введите имя' name='name' label='Название' >
          <BuildingOfficeIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <InputTextArea value={formik.values.description} name='description' onChange={formik.handleChange} placeholder="Введите описание..." label='Описание' row='3'/>

        <div className='border-y border-gray-500'>
          <div className="flex items-center bg-transparent w-full border-x-2 border-[#3e9db4] m-auto h-full">
            <ArrowTrendingUpIcon className="h-5 text-gray-400 px-2" />
            <div className='flex flex-col w-full border-x border-gray-500'>
              <label
                htmlFor="first-name"
                className="text-sm pl-3 py-1 border-b border-gray-500 font-bold text-[#b99a47] md:pl-1 lg:pl-1 xl:pl-2"
              >
                Статус
              </label>
              <select
                onChange={formik.handleChange}
                name="status"
                className="w-full bg-transparent focus:ring-blue-500 border-none outline-none text-gray-300 md:p-1 lg:p-2 2xl:p-2 md:text-1 lg:text-1 xl:text-1 "
              >
                <option className='text-gray-200 bg-gray-700 hover:bg-red-600' value={formik.values.status}>{statusObj[formik.values.status]}</option>
                <option className='text-gray-200 bg-gray-700' value="Active">Активный</option>
                <option className='text-gray-200 bg-gray-700' value="Completed">Завершенный</option>
                <option className='text-gray-200 bg-gray-700' value="Failed">Незавершенный</option>
              </select>
            </div>
          </div>
        </div>

        {
          loading ? <Button disabled type="button" loading='true'/> : <Button type="submit" text='Редактировать'/>
        }
      </div>
    </form>
  );
};

export default ProjectEditForm;
