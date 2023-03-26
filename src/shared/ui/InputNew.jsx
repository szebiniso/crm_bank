import React from 'react';
import {KeyIcon} from "@heroicons/react/24/outline";

const InputNew = ({label,
                    placeholder,
                    type,
                    error,
                    touched,
                    autoComplete,
                    onChange,
                    name,
                    children,}) => {
  return (
    <div className='border-y border-gray-500'>
      <div className="flex items-center bg-[#43475a] w-full border-x-2 border-[#3e9db4] m-auto h-full">
        {children}
        <div className='flex flex-col w-full border-x border-gray-500'>
          <label
            className="font-roboto pl-3 py-0.5 border-b border-gray-500 font-bold text-[#b99a47] md:pl-1 lg:pl-1 xl:pl-2"
          >
            {label}
            {/*<span className='pl-1 text-red-400 text-[0.95rem] font-normal'>*</span>*/}
            {/*<span className='pl-3 text-red-400 text-[0.8rem] font-light'>{error}</span>*/}
          </label>
          <input
            type={type}
            id="input-group-1"
            name={name}
            onChange={onChange}
            className="font-roboto w-full bg-transparent focus:ring-blue-500 border-none outline-none text-gray-200 md:p-1 lg:p-2 2xl:p-2 md:text-1 lg:text-1 xl:text-1 "
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default InputNew;
