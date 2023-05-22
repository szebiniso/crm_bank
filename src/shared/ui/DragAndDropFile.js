import React, {useState} from 'react';
import {useDropzone} from "react-dropzone";
import {useDispatch} from "react-redux";
import {addFilesToProject, editProject} from "../../entities/Projects/api/ProjectsSliceFunctions";
import {useParams} from "react-router-dom";
import {InboxArrowDownIcon, XMarkIcon} from "@heroicons/react/20/solid";

const DragAndDropFile = ({closeModal, formData}) => {

  const [uploadedFiles, setUploadedFiles] = useState([]);
  // const dispatch = useDispatch()
  // const {id} = useParams()

  const onDrop = async (acceptedFiles) => {
    // for (let i = 0; i < acceptedFiles.length; i++) {
    //   formData.append(`uploaded_files[${i}]`, acceptedFiles[i]);
    // }
    setUploadedFiles(acceptedFiles);

    // try {
    //   dispatch(addFilesToProject({project_id: id, values: formData, closeModal}))
    //   setUploadedFiles(acceptedFiles);
    // } catch (error) {
    //   // Handle the error
    //   console.error(error);
    // }
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
  // ....................

  return (
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
  );
}

export default DragAndDropFile;
