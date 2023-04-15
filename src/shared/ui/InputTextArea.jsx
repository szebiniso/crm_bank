import React from 'react';
import {Bars3BottomLeftIcon} from "@heroicons/react/24/outline";

const InputTextArea = ({onChange, row, label, placeholder, name, value}) => {
  return (
    <div className='border-y border-gray-500'>
      <div className="flex items-center bg-transparent w-full border-x-2 border-[#3e9db4] m-auto h-full">
        <Bars3BottomLeftIcon className="h-5 text-gray-400 px-2" />
        <div className='flex flex-col w-full border-x border-gray-500'>
          <label
            htmlFor="first-name"
            className="text-sm pl-3 py-1 border-b border-gray-500 font-bold text-[#b99a47] md:pl-1 lg:pl-1 xl:pl-2"
          >
            {label}
          </label>
          <textarea onChange={onChange} name={name} id="message" rows={row} value={value}
                    className="w-full bg-transparent focus:ring-blue-500 border-none outline-none text-gray-300 md:p-1 lg:p-2 2xl:p-2 md:text-1 lg:text-1 xl:text-1 "
                    placeholder={placeholder}></textarea>
        </div>
      </div>
    </div>
  );
};

export default InputTextArea;
