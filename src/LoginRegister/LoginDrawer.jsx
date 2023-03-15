import React, {useEffect, useRef, useState} from 'react';
import {AtSymbolIcon, KeyIcon, PhoneIcon, UserCircleIcon} from "@heroicons/react/24/outline";
import Input from "../shared/ui/Input";
import InputNew from "../shared/ui/InputNew";
import AuthForm from "../entities/Forms/ui/AuthForm";
import RegistrationForm from "../entities/Forms/ui/RegistrationForm";

function LoginDrawer() {

  const [slided, setSlided] = useState(true);

  const slideLeft = (id) => {
    const slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft - 1500;
  };
  const slideRight = (id) => {
    const slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft + 1500;
  };

  useEffect(() => {
    slideRight('slider')
  }, []);

  const handleSlideLogin = (id, cover_id) => {
    slideRight(id)
    slideLeft(cover_id)
    setSlided(!slided)
  }

  const handleSlideRegistration = (id, cover_id) => {
    slideRight(cover_id)
    slideLeft(id)
    setSlided(!slided)
  }

  return (
    <>
      <div className=' h-screen w-screen'>
        <div
          id='slider'
          className='w-screen h-screen overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide grid grid-cols-40/60/40'
        >
          <div className='bg-[#3b3d4c] inline-block cursor-pointer ease-in-out duration-300 flex items-center justify-center'>
            <RegistrationForm slideLogin={() => handleSlideLogin('slider', 'cover_slider')}/>
          </div>
          <div className="bg-blue-900 cursor-pointer ease-in-out duration-100 text-center">
          </div>
          <div className='h-screen bg-[#3b3d4c] inline-block cursor-pointer ease-in-out duration-300 flex items-center justify-center'>
            <AuthForm/>
          </div>
        </div>

        <div
          id='cover_slider'
          className='absolute top-0 left-0 w-screen h-screen overflow-x-scroll scroll whitespace-nowrap scroll-smooth duration-75 scrollbar-hide grid grid-cols-60/40/60'
        >
          <div className='bg-transparent text-center flex flex-col items-center justify-end'>
            {/*<img className='w-[150px] mb-6 2xl:hidden' src='https://totalcrm.com.au/wp-content/uploads/2021/06/Total-CRM-LOGO-Dark-BG.png'/>*/}
            <h2 className="font-roboto text-3xl font-extrabold text-white mb-12 lg:mb-8">
              Привет! Добро пожаловать на платформу <br/> Project Pilot
            </h2>
            {/*<p className="mb-3 text-lg font-normal text-gray-400 md:text-xl">*/}
            {/*    Еще нет аккаунта?*/}
            {/*  </p>*/}
            <button type="button"
                    onClick={() => handleSlideRegistration('slider', 'cover_slider')}
                    className="font-roboto text-white cursor-pointer mt-4 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-6 py-3 text-center mb-4  md:mb-6 lg:mb-4 xl:mb-4 2xl:mb-1">
              Зарегистрироваться
            </button>
            <img className='w-[60%]' src='https://www.theconstructsim.com/wp-content/uploads/2020/05/Individuals-TCS-2020-1.png'/>
          </div>
          <div className="h-screen bg-transparent inline-block">
            <h3 className="font-roboto mb-4 p-8 text-xl font-extrabold text-gray-300 dark:text-white md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-4xl" >
              <span className="text-blue-500 mb-8">P</span>.Pilot</h3>
          </div>
          <div className='bg-transparent text-center flex flex-col items-center justify-end'>
            <img className='w-[150px] mb-6 2xl:hidden' src='https://totalcrm.com.au/wp-content/uploads/2021/06/Total-CRM-LOGO-Dark-BG.png'/>
            <h2 className="font-roboto text-3xl font-extrabold text-white mb-12 lg:mb-8">
              Привет! Добро пожаловать на платформу <br/> Project Pilot
            </h2>
            {/*<p className="mb-3 text-lg font-normal text-gray-400 md:text-xl">*/}
            {/*  Уже есть аккаунт?*/}
            {/*</p>*/}
            <button type="button"
                    onClick={() => handleSlideLogin('slider', 'cover_slider')}
                    className="font-roboto text-white cursor-pointer mt-4 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-6 py-3 text-center mb-2">
              Авторизоваться
            </button>
            <img className='w-[60%]' src='https://www.theconstructsim.com/wp-content/uploads/2020/05/Individuals-TCS-2020-1.png'/>
          </div>
        </div>


      </div>
    </>
  );
}

export default LoginDrawer;
