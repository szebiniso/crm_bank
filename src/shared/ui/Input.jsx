import React, { FC } from "react";

const Input = ({
  label,
  placeholder,
  type,
  error,
  touched,
  autoComplete,
  onChange,
  name,
  children,
}) => {
  return (
    <div className="h-[5rem] mb-3 md:mb-1">
      <label
        htmlFor="input-group-1"
        className="block mb-1 text-sm font-medium text-gray-600 dark:text-white"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {children}
        </div>
        <input
          type={type}
          id="input-group-1"
          name={name}
          autoComplete={autoComplete}
          onChange={onChange}
          className="bg-white-50 border md:text border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        />
      </div>
      {error && touched && (
        <p className="mt-0.5 text-sm text-red-500 dark:text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;
