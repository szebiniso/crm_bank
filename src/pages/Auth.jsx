import React from "react";
import {useDispatch, useSelector} from "react-redux";
import ErrorAlert from "../shared/ui/ErrorAlert";
import {closeAuthErrorAlert} from "../entities/Forms/api/AuthSlice";
import AuthForm from "../entities/Forms/ui/AuthForm";

const Auth = () => {
  const {authError} = useSelector(state => state.auth)
  const dispatch = useDispatch();

  return (
    <div className='relative'>
      {
        authError && <ErrorAlert error_title='Неправильно введен логин или пароль! :(' closeDispatch={() => dispatch(closeAuthErrorAlert())}/>
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
};

export default Auth;
