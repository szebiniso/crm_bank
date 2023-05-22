import React, {useState} from 'react';
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {truncateString} from "../../../shared/utils/truncateString";
import {ArrowDownTrayIcon, TrashIcon} from "@heroicons/react/24/outline";
import {DocumentTextIcon, PlusIcon} from "@heroicons/react/20/solid";
import {setFile, truncateFileName} from "../../../shared/utils/setFile";
import {useDispatch} from "react-redux";
import {deleteFile} from "../api/FIleSliceFunctions";
import {useParams} from "react-router-dom";
import FormModal from "../../../widgets/Modals/ui/FormModal";
import DragAndDropFile from "../../../shared/ui/DragAndDropFile";

const Files = ({files}) => {

  const [modal, setModal] = useState(false);

  const handleOpenModal = () => setModal(true)
  const handleCloseModal = () => setModal(false)

  const dispatch = useDispatch();
  const {id} = useParams()

  const handleClick = (id) => {
    setOptions(!options)
    setFileId(id)
  }

  const handleDeleteFile = (file_id) => {
    dispatch(deleteFile({file_id, id}))
  }

  const [options, setOptions] = useState(false);
  const [fileId, setFileId] = useState(null);

  return (
    <>
      <div className='flex items-center bg-container-bg rounded mt-8'>
        <ul className='flex w-full items-center z-0 gap-3 overflow-y-visible overflow-y-auto'>
          {
            files?.map(file => (
              <li className='w-60 flex gap-2 items-end text-gray-200 border border-gray-700 rounded overflow-visible p-3 relative'>
                <DocumentTextIcon className="h-6 w-6 text-blue-400" />
                <p className='text-sm'>{truncateString(truncateFileName(file.file), 25)}</p>
                <BiDotsHorizontalRounded onClick={() => handleClick(file.id)} className='h-5 w-5 absolute top-3.5 right-2 text-gray-400 rotate-90 cursor-pointer'/>
                {options && fileId === file.id && (
                  <ul className='absolute z-10 w-28 bg-gray-800 text-sm top-8 -right-4 py-2 px-2 rounded'>
                    <a href={setFile(file.file)} download="My_File.pdf">
                      <li className='p-2 flex gap-1 cursor-pointer hover:bg-[#212c3c] rounded'>
                        <ArrowDownTrayIcon className="h-4 w-4 text-gray-200"/>
                        <p>Скачать</p>
                      </li>
                    </a>
                    <li onClick={() => handleDeleteFile(file.id)} className='w-full p-2 flex gap-1 cursor-pointer hover:bg-[#212c3c] rounded'>
                      <TrashIcon className="h-4 w-4 text-gray-200"/>
                      <p>Удалить</p>
                    </li>
                  </ul>
                )}
              </li>
            ))
          }
          <PlusIcon onClick={handleOpenModal} className="h-10 w-10 text-gray-300 bg-gray-800 rounded cursor-pointer" />
        </ul>
      </div>

      {
        modal && <FormModal
          showModal={modal}
          setShowModal={handleCloseModal}
        >
        <DragAndDropFile closeModal={handleCloseModal}/>
        </FormModal>
      }


    </>

  );
};

export default Files;
