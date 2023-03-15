import React, {useRef} from "react";
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";
import ForgetPassword from "../../../features/ui/ForgetPassword";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AuthApi } from "../api/authApi";
import { AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";
import { AuthSchema } from "../../../shared/utils/yup";
import {useDispatch, useSelector} from "react-redux";
import InputNew from "../../../shared/ui/InputNew";
import ReCAPTCHA from "react-google-recaptcha"

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {authLoading} = useSelector(state => state.auth)

  // const captchaRef = useRef(null)


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      // captcha: token,
    },
    validationSchema: AuthSchema,
    onSubmit: (data) => {
      console.log(data);
      // const token = captchaRef.current.getValue();
      // console.log(token)
      // captchaRef.current.reset();
      const data_obj = { data, navigate};
      dispatch(AuthApi(data_obj));
    },
  });

  return (
      <div className='w-[80%] flex flex-col gap-10 justify-center'>
        <h3 className='font-roboto m-auto text-3xl font-bold text-gray-200 md:text-xl lg:text-3xl xl:text-3xl 2xl:text-3xl'>Авторизоваться</h3>
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-7 z-10'>
          <InputNew onChange={formik.handleChange} placeholder='Введите почту' type='email' name='email' label='Почта' >
            <AtSymbolIcon className="h-5 text-gray-400 px-2" />
          </InputNew>
          <InputNew onChange={formik.handleChange} placeholder='Введите пароль' type='password' name='password' label='Пароль'>
            <KeyIcon className="h-5 text-gray-400 px-2" />
          </InputNew>

          {/*<ReCAPTCHA*/}
          {/*  sitekey={process.env.REACT_APP_SITE_KEY}*/}
          {/*  ref={captchaRef}*/}
          {/*  size="large"*/}
          {/*/>*/}

          {
            authLoading ? <button disabled type="button"
                              className="font-roboto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded text-sm px-5 py-2.5 text-center">
              <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin"
                   viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"/>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"/>
              </svg>
              Loading...
            </button> : <button type="submit"
                                className="font-roboto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded text-sm px-5 py-2.5 text-center">
              Войти
            </button>
          }
        </form>
      </div>
  );
};

export default AuthForm;
