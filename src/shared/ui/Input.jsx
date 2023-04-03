import React from 'react';
import {KeyIcon} from "@heroicons/react/24/outline";

const Input = ({label,
                    placeholder,
                    type,
                    error,
                    touched,
                    autoComplete,
                    onChange,
                    name,
                    value,
                    children,}) => {
  return (
    <div className='border-y border-gray-500'>
      <div className="flex items-center bg-inherit w-full border-x-2 border-[#3e9db4] m-auto h-full">
        {children}
        <div className='flex flex-col w-full border-x border-gray-500'>
          <label
            className="font-roboto text-sm pl-3 py-1 border-b border-gray-500 font-bold text-[#b99a47] md:pl-1 lg:pl-1 xl:pl-2"
          >
            {label}
          </label>
          <input
            value={value}
            type={type}
            name={name}
            onChange={onChange}
            className="font-roboto w-full bg-inherit focus:ring-blue-500 border-none outline-none text-gray-200 md:p-1 lg:p-2 2xl:p-2 md:text-1 lg:text-1 xl:text-1 "
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
