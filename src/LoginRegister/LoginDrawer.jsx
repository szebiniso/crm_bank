import React from 'react';
import AuthForm from "../entities/Forms/ui/AuthForm";
import {useDispatch, useSelector} from "react-redux";
import {closeAuthErrorAlert} from "../entities/Forms/api/AuthSlice";

function LoginDrawer() {

  const {authError} = useSelector(state => state.auth)
  const dispatch = useDispatch();

  return (
    <div className='relative'>
      {
        authError && <div id="alert-2" className="flex p-4 mb-4 text-red-800 absolute right-10 top-10 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                          role="alert">
          <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"></path>
          </svg>
          <span className="sr-only">Info</span>
          <div className="mx-3 text-sm font-medium">
            Неправильно введен логин или пароль! :(
          </div>
          <button type="button"
                  onClick={() => dispatch(closeAuthErrorAlert())}
                  className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                  data-dismiss-target="#alert-2" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      }

      <div className='h-screen w-screen overflow-hidden whitespace-nowrap scrollbar-hide grid grid-cols-60/40'>
        <div className='bg-[#3b3d4c] text-center flex items-center justify-center'>
          <img className='w-[95%] h-screen mt-6' src='https://www.theconstructsim.com/wp-content/uploads/2020/05/Individuals-TCS-2020-1.png'/>
        </div>
        <div style={{backgroundSize: '70rem', backgroundPositionY: '-50px', backgroundPositionX: '45px'}} className='h-screen bg-[#3b3d4c] bg-auth-form-bg bg-no-repeat bg-blend-luminosity inline-block cursor-pointer ease-in-out duration-300 flex items-center justify-center'>
          <AuthForm/>
        </div>
      </div>
    </div>
  );
}

export default LoginDrawer;
