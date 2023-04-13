import React, {useEffect, useState} from "react";
import Button from "../../../shared/ui/Button";
import { useFormik } from "formik";
import {useDispatch, useSelector} from "react-redux";
import Input from "../../../shared/ui/Input";
import {UserIcon, PencilIcon, Bars3BottomLeftIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import {getManagers} from "../../Users/api/UsersSliceFunctions";
import {createProject} from "../api/ProjectsSliceFunctions";

export default function ProjectCreateForm({closeModal}) {

  const dispatch = useDispatch()

  const {managers} = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getManagers())
  }, []);


  // console.log('admins', managers)
  const formik = useFormik({
    initialValues: {
      manager: null,
      name: "",
      description: "",
      status: ""
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      const data = {values, closeModal}
      dispatch(createProject(data))
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
              <UserIcon className="h-5 text-gray-400 px-2" />
              <div className='flex flex-col w-full border-x border-gray-500'>
                <label
                  htmlFor="first-name"
                  className="text-sm pl-3 py-1 border-b border-gray-500 font-bold text-[#b99a47] md:pl-1 lg:pl-1 xl:pl-2"
                >
                  Менеджер
                </label>
                <select
                  onChange={formik.handleChange}
                  name="manager"
                  className="w-full bg-transparent focus:ring-blue-500 border-none text-gray-300 md:p-2 lg:p-1 2xl:p-2 md:text-1 lg:text-1 xl:text-1 "
                >
                  <option className='text-gray-200 bg-gray-700' value=""></option>
                  {
                    managers.map(manager => {
                      return <option className='text-gray-200 bg-gray-700' value={manager.id}>{manager.first_name} {manager.last_name}</option>
                    })
                  }
                </select>
              </div>
            </div>
          </div>

          <Input onChange={formik.handleChange} type='text' placeholder='Введите название проекта' name='name' label='Название' >
            <PencilIcon className="h-5 text-gray-400 px-2" />
          </Input>

          <div className='border-y border-gray-500'>
            <div className="flex items-center bg-transparent w-full border-x-2 border-[#3e9db4] m-auto h-full">
              <Bars3BottomLeftIcon className="h-5 text-gray-400 px-2" />
              <div className='flex flex-col w-full border-x border-gray-500'>
                <label
                  htmlFor="first-name"
                  className="text-sm pl-3 py-1 border-b border-gray-500 font-bold text-[#b99a47] md:pl-1 lg:pl-1 xl:pl-2"
                >
                  Описание
                </label>
                <textarea onChange={formik.handleChange} name='description' id="message" rows="6"
                          className="w-full bg-transparent focus:ring-blue-500 border-none text-gray-300 md:p-2 lg:p-1 2xl:p-2 md:text-1 lg:text-1 xl:text-1"
                          placeholder="Введите описание к проекту..."></textarea>
              </div>
            </div>
          </div>

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
                  className="w-full bg-transparent focus:ring-blue-500 border-none text-gray-300 md:p-2 lg:p-1 2xl:p-2 md:text-1 lg:text-1 xl:text-1 "
                >
                  <option className='text-gray-200 bg-gray-700 hover:bg-red-600' value=""></option>
                  <option className='text-gray-200 bg-gray-700' value="Active">Активный</option>
                  <option className='text-gray-200 bg-gray-700' value="Completed">Завершенный</option>
                  <option className='text-gray-200 bg-gray-700' value="Failed">Проваленный</option>
                </select>
              </div>
            </div>
          </div>

          <Button type="submit" text='Создать'/>

        </div>
      </form>
    </>
  );
}
