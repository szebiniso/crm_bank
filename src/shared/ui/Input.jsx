import React from 'react';

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
      <div className="flex items-center bg-transparent w-full border-x-2 border-[#3e9db4] m-auto h-full">
        {children}
        <div className='flex flex-col w-full border-x border-gray-500'>
          <label
            className="text-sm pl-3 py-1 border-b border-gray-500 font-bold text-[#b99a47] md:pl-1 lg:pl-1 xl:pl-2"
          >
            {label}
          </label>
          <input
            value={value}
            type={type}
            name={name}
            onChange={onChange}
            className="w-full bg-transparent focus:ring-blue-500 border-none outline-none text-gray-300 md:p-1 lg:p-2 2xl:p-2 md:text-1 lg:text-1 xl:text-1 "
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
