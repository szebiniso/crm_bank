import React from 'react';
import RadialMenu from "../../../shared/ui/RadialMenu";

const Profile = () => {
  return (
    <div className='bg-gray-800 drop-shadow-4xl rounded-xl h-[80vh] w-[35%] flex flex-col py-8 px-10 mt-11'>
      <div className='flex items-center pl-4 gap-8'>
        <p className='text-gray-300'>Hello,<br/> Alina Alieva</p>
        <img className="object-cover mx-auto w-16 h-16 rounded-full" src="https://aif-s3.aif.ru/images/019/507/eeba36a2a2d37754bab8b462f4262d97.jpg" alt="Neil image"/>
      </div>
      <hr className='my-8'/>

      {/*<RadialMenu/>*/}

      <div className='flex flex-wrap'>
        <div className='w-1/2 p-3'>
          <p className='text-gray-300'>Total project:</p>
          <h3 className='text-2xl text-gray-100 font-bold px-2 border-l-2 border-blue-500'>134</h3>
        </div>
        <div className='w-1/2 p-3'>
          <p className='text-gray-300'>Total project:</p>
          <h3 className='text-2xl text-gray-100 font-bold px-2 border-l-2 border-blue-500'>134</h3>
        </div>
        <div className='w-1/2 p-3'>
          <p className='text-gray-300'>Total project:</p>
          <h3 className='text-2xl text-gray-100 font-bold px-2 border-l-2 border-blue-500'>134</h3>
        </div>
        <div className='w-1/2 p-3'>
          <p className='text-gray-300'>Total project:</p>
          <h3 className='text-2xl text-gray-100 font-bold px-2 border-l-2 border-blue-500'>134</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
