import React, {useState} from 'react';
import {BiDotsHorizontalRounded} from "react-icons/bi";
import pdf_icon from '../../../shared/assets/pdf.png'
import word_icon from '../../../shared/assets/word.png'
import {truncateString} from "../../../shared/utils/truncateString";
import {ArrowDownTrayIcon, TrashIcon} from "@heroicons/react/24/outline";
import {DocumentTextIcon} from "@heroicons/react/20/solid";
import {truncateFileName} from "../../../shared/utils/setFile";

const Files = ({files}) => {

  // const files = [
  //   {
  //     id: 1,
  //     name: 'Название файла.pdf',
  //     icon: pdf_icon
  //   },
  //   {
  //     id: 2,
  //     name: 'Название файла.pdf',
  //     icon: word_icon
  //   },
    // {
    //   id: 3,
    //   name: 'Название файла.pdf',
    //   icon: pdf_icon
    // },
    // {
    //   id: 4,
    //   name: 'Название файла.pdf',
    //   icon: pdf_icon
    // },
    // {
    //   id: 2,
    //   name: 'Название файла.pdf',
    //   icon: word_icon
    // },
    // {
    //   id: 3,
    //   name: 'Название файла.pdf',
    //   icon: pdf_icon
    // },
    // {
    //   id: 4,
    //   name: 'Название файла.pdf',
    //   icon: pdf_icon
    // },
    // {
    //   id: 2,
    //   name: 'Название файла.pdf',
    //   icon: word_icon
    // },
    // {
    //   id: 3,
    //   name: 'Название файла.pdf',
    //   icon: pdf_icon
    // },
    // {
    //   id: 4,
    //   name: 'Название файла.pdf',
    //   icon: pdf_icon
    // },
  // ]

  const handleClick = (id) => {
    setOptions(!options)
    setId(id)
  }

  const [options, setOptions] = useState(false);
  const [id, setId] = useState(null);

  return (
      <ul className='flex w-full gap-3 p-2 pb-8 mt-8 overflow-x-scroll'>
        {
          files?.map(file => (
            <li className='w-60 flex gap-2 items-end text-gray-200 border border-gray-700 rounded p-3 relative'>
              <DocumentTextIcon className="h-6 w-6 text-blue-400" />
              <p className='text-sm'>{truncateString(truncateFileName(file.file), 25)}</p>
              <BiDotsHorizontalRounded onClick={() => handleClick(file.id)} className='h-5 w-5 absolute top-3.5 right-2 text-gray-400 rotate-90 cursor-pointer'/>
              {options && id === file.id && (
                <ul className='absolute z-10 w-full bg-gray-800 text-sm top-8 -right-4 py-2 px-2 rounded'>
                  <li className='p-2 flex gap-1 cursor-pointer hover:bg-[#212c3c] rounded'>
                    <ArrowDownTrayIcon className="h-4 w-4 text-gray-200"/>
                    <p>Скачать</p>
                  </li>
                  <li className='w-full p-2 flex gap-1 cursor-pointer hover:bg-[#212c3c] rounded'>
                    <TrashIcon className="h-4 w-4 text-gray-200"/>
                    <p>Удалить</p>
                  </li>
                </ul>
              )}
            </li>
          ))
        }
      </ul>
  );
};

export default Files;
