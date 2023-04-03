import React from 'react';
import CreateButton from "./CreateButton";

const Header = ({onChange, isButtonExist, title}) => {
  return (
    <div className="flex h-12 justify-between items-center">
      <h2 className="mb-2 ml-2 text-3xl tracking-tight font-extrabold text-gray-300 dark:text-white">
        {title}
      </h2>
      {
        isButtonExist && <CreateButton onChange={onChange} type='button' text='Создать'/>
      }
    </div>
  );
};

export default Header;
