import React, {useState} from 'react';
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/outline";

const PasswordInput = ({label,
                    placeholder,
                    error,
                    touched,
                    autoComplete,
                    onChange,
                    name,
                    value,
                    children,}) => {

  const [eyeOpen, setEyeOpen] = useState(false);

  const handleOpenEye = () => setEyeOpen(!eyeOpen)

  return (
    <div className='border-y border-gray-500'>
      <div className="flex items-center bg-transparent w-full border-x-2 border-[#3e9db4] m-auto h-full">
        {children}
        <div className='flex flex-col w-full border-x border-gray-500'>
          <label
            className="text-sm pl-3 py-1 border-b border-gray-500 font-bold text-[#b99a47] md:pl-1 lg:pl-1 xl:pl-2"
          >
            {label}
          </label>
          <div className="flex justify-center items-center focus:ring-blue-500">
            <input
              value={value}
              type={eyeOpen ? 'text' : 'password'}
              name={name}
              onChange={onChange}
              className="w-full bg-transparent border-none outline-none text-gray-300 md:p-1 lg:p-2 2xl:p-2 md:text-1 lg:text-1 xl:text-1 "
              placeholder={placeholder}
            />
            {
              eyeOpen ? <EyeIcon onClick={handleOpenEye} className="h-5 text-gray-400 px-2" /> : <EyeSlashIcon onClick={handleOpenEye} className="h-5 text-gray-400 px-2" />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
