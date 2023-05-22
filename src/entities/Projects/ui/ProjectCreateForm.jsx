import React, {useEffect, useState} from "react";
import Button from "../../../shared/ui/Button";
import { useFormik } from "formik";
import {useDispatch, useSelector} from "react-redux";
import Input from "../../../shared/ui/Input";
import {UserIcon, PencilIcon, ArrowTrendingUpIcon, CalendarDaysIcon, BanknotesIcon} from "@heroicons/react/24/outline";
import {getManagers} from "../../Users/api/UsersSliceFunctions";
import { createProject} from "../api/ProjectsSliceFunctions";
import InputTextArea from "../../../shared/ui/InputTextArea";
import {InboxArrowDownIcon, XMarkIcon} from "@heroicons/react/20/solid";
import DragAndDropFile from "../../../shared/ui/DragAndDropFile";
import FormModal from "../../../widgets/Modals/ui/FormModal";
import {useDropzone} from "react-dropzone";

export default function ProjectCreateForm({closeModal}) {

  const [fileModal, setFileModal] = useState(false);

  const dispatch = useDispatch()

  const fData = new FormData();

  // ............DragAndDropFiles...................................................................

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = async (acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
  };


  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    const updatedFiles = [...uploadedFiles];
    updatedFiles[index] = file;
    setUploadedFiles(updatedFiles);
  };

  // const handleAddFileInput = () => {
  //   setUploadedFiles([...uploadedFiles, null]);
  //   // setFileModal(true)
  // };

  const handleRemoveFileInput = (index) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
  };

  // .........................................................................................................

  const {managers} = useSelector(state => state.users)
  const {loading} = useSelector(state => state.projects)

  useEffect(() => {
    dispatch(getManagers({limit: 20, offset: 0}))
  }, []);

  const formik = useFormik({
    initialValues: {
      manager: null,
      name: "",
      description: "",
      status: "",
      'start_date': null,
      'end_date': null,
      budget: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      uploadedFiles.forEach((file, index) => {
        fData.append(`uploaded_files[${index}]`, file);
      });
      fData.append("name", values.name);
      fData.append("description", values.description);
      fData.append("manager", values.manager);
      fData.append("status", values.status);
      fData.append("start_date", values.start_date);
      fData.append("end_date", values.end_date);
      fData.append("budget", values.budget);
      console.log('ll',values);
      const data = {fData, closeModal}
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
                  className="w-full max-h-10 overflow-auto bg-transparent focus:ring-blue-500 border-none outline-none text-gray-300 md:p-1 lg:p-2 2xl:p-2 md:text-1 lg:text-1 xl:text-1 "
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

          <Input onChange={formik.handleChange} type='text' placeholder='Введите бюджет проекта' name='budget' label='Бюджет' >
            <BanknotesIcon className="h-5 text-gray-400 px-2" />
          </Input>

          <Input onChange={formik.handleChange} type='date' placeholder='' name='start_date' label='Дата начало' >
            <CalendarDaysIcon className="h-5 text-gray-400 px-2" />
          </Input>

          <Input onChange={formik.handleChange} type='date' placeholder='' name='end_date' label='Дата окончания' >
            <CalendarDaysIcon className="h-5 text-gray-400 px-2" />
          </Input>

          <InputTextArea name='description' onChange={formik.handleChange} placeholder="Введите описание..." label='Описание' row='3'/>

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
                  <option className='text-gray-200 bg-gray-700 hover:bg-red-600' value=""></option>
                  <option className='text-gray-200 bg-gray-700' value="Active">Активный</option>
                  <option className='text-gray-200 bg-gray-700' value="Completed">Завершенный</option>
                  <option className='text-gray-200 bg-gray-700' value="Failed">Проваленный</option>
                </select>
              </div>
            </div>
          </div>


          {/*.........DropAndDragFiles.........*/}

          <div className='my-2'>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here...</p>
              ) : (
                <div className='flex flex-col cursor-pointer mb-8 gap-2 items-center text-gray-400'>
                  <InboxArrowDownIcon className="h-12 w-12 text-gray-500" />
                  <p>Кликните или перетащите файл сюда</p>
                </div>

              )}
            </div>

            {uploadedFiles.map((file, index) => (
              <div className='my-4' key={index}>
                <div className='flex w-full items-center text-gray-400'>
                  <input className='w-full h-full overflow-auto bg-transparent focus:ring-blue-500 border-none outline-none text-gray-300 md:text-1 lg:text-1 xl:text-1 ' type="file" onChange={(event) => handleFileChange(event, index)}/>
                  <XMarkIcon onClick={() => handleRemoveFileInput(index)} className="h-6 w-6 text-gray-500 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>


          {/*.......................................*/}


          {
            loading ? <Button disabled type="button" loading='true'/> : <Button type="submit" text='Создать'/>
          }

        </div>
      </form>
      {
        fileModal && <FormModal
          showModal={fileModal}
          setShowModal={() => setFileModal(false)}
        >
          <DragAndDropFile formData={fData} closeModal={() => setFileModal(false)}/>
        </FormModal>
      }
    </>
  );
}

