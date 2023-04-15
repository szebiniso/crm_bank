import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AuthApi } from "../api/authApi";
import { AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";
import { AuthSchema } from "../../../shared/utils/yup";
import {useDispatch, useSelector} from "react-redux";
import Input from "../../../shared/ui/Input";
import {closeAuthErrorAlert} from "../api/AuthSlice";
import Button from "../../../shared/ui/Button";
import PasswordInput from "../../../shared/ui/PasswordInput";
// import ReCAPTCHA from "react-google-recaptcha"

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {authLoading, authError} = useSelector(state => state.auth)

  // const captchaRef = useRef(null)
  // authError && alert('Неправильно введен логин или пароль! :(')

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      // captcha: token,
    },
    validationSchema: AuthSchema,
    onSubmit: (data) => {
      console.log(data);
      dispatch(closeAuthErrorAlert())
      // const token = captchaRef.current.getValue();
      // console.log(token)
      // captchaRef.current.reset();
      const data_obj = { data, navigate};
      dispatch(AuthApi(data_obj));
    },
  });

  return (
      <div className='w-[80%] flex flex-col gap-8 mt-24 mr-4 justify-center'>
        <h3 className='m-auto text-3xl font-bold text-gray-200 md:text-xl lg:text-[1.6rem] xl:text-[1.6rem] 2xl:text-3xl'>Авторизоваться</h3>
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-7 z-10'>
          <Input error={formik.errors.email} touched={formik.touched.email} onChange={formik.handleChange} type='email' placeholder='Введите почту' name='email' label='Почта' >
            <AtSymbolIcon className="h-5 text-gray-400 px-2" />
          </Input>
          <PasswordInput error={formik.errors.password} touched={formik.touched.password} onChange={formik.handleChange} type='password' placeholder='Введите пароль' name='password' label='Пароль'>
            <KeyIcon className="h-5 text-gray-400 px-2" />
          </PasswordInput>

          {/*<ReCAPTCHA*/}
          {/*  sitekey={process.env.REACT_APP_SITE_KEY}*/}
          {/*  ref={captchaRef}*/}
          {/*  size="large"*/}
          {/*/>*/}

          {
            authLoading ? <Button disabled type="button" loading='true'/> : <Button type="submit" text='Войти'/>
          }
        </form>
      </div>
  );
};

export default AuthForm;
