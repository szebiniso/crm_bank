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
            // htmlFor="input-group-1"
            className="font-roboto pl-3 py-0.5 border-b border-gray-500 font-bold text-[#b99a47] md:pl-1 lg:pl-1 xl:pl-2"
          >
            {label}
          </label>
          <input
            type={type}
            id="input-group-1"
            name={name}
            onChange={onChange}
            // autoComplete={autoComplete}
            className="font-roboto w-full bg-transparent focus:ring-blue-500 border-none text-gray-200 md:p-1 lg:p-1 2xl:p-2 md:text-1 lg:text-1 xl:text-1 "
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default InputNew;
