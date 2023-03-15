import React from "react";
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";
import { useFormik } from "formik";
import { RegisterApi } from "../api/registerApi";
import {
  AtSymbolIcon,
  KeyIcon,
  PhoneIcon,
  UserCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { RegisterSchema } from "../../../shared/utils/yup";
import {useDispatch, useSelector} from "react-redux";
import InputNew from "../../../shared/ui/InputNew";

const RegistrationForm = ({slideLogin}) => {
  const dispatch = useDispatch();
  const {registerLoading} = useSelector(state => state.auth)

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      password: "",
      role: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      const data_obj = {values, slideLogin};
      dispatch(RegisterApi(data_obj));
      console.log('fghjk')
    }
  });

  return (
    <div className='w-[70%] flex flex-col gap-10 justify-center'>
      <h3 className='font-roboto m-auto text-3xl font-bold text-gray-200 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl'>Зарегистрироваться</h3>
      <form onSubmit={formik.handleSubmit} className='flex flex-col gap-7 z-10'>
        <InputNew
          error={formik.errors.first_name}
          touched={formik.touched.first_name}
          onChange={formik.handleChange}
          name="first_name"
          label="Имя"
          placeholder="Введите имя"
          type="text"
          autoComplete="first-name">
          <UserCircleIcon className="h-5 text-gray-400 px-2" />
        </InputNew>
        <InputNew
          error={formik.errors.last_name}
                  touched={formik.touched.last_name}
                  onChange={formik.handleChange}
          name="last_name"
          label="Фамилия"
          placeholder="Введите фамилию"
          type="text"
          autoComplete="family-name">
          <UserCircleIcon className="h-5 text-gray-400 px-2" />
        </InputNew>
        <InputNew
          error={formik.errors.phone_number}
                  touched={formik.touched.phone_number}
                  onChange={formik.handleChange}
          name="phone_number"
          label="Номер телефона"
          placeholder="Введите номер телефона"
          type="text"
          autoComplete="tel">
          <PhoneIcon className="h-5 text-gray-400 px-2" />
        </InputNew>
        <div className='border-y border-gray-500'>
          <div className="flex items-center bg-[#43475a] w-full border-x-2 border-[#3e9db4] m-auto h-full">
            <KeyIcon className="h-5 text-gray-400 px-2" />
            <div className='flex flex-col w-full border-x border-gray-500'>
              <label
                htmlFor="first-name"
                className="font-roboto pl-3 py-0.5 border-b border-gray-500 font-bold text-[#b99a47] md:pl-1 lg:pl-1 xl:pl-2"
              >
                Должность
              </label>
              <select
                onChange={formik.handleChange}
                name="role"
                className="font-roboto w-full bg-transparent focus:ring-blue-500 border-none text-gray-200 md:p-2 lg:p-1 2xl:p-2 md:text-1 lg:text-1 xl:text-1 "
              >
                <option className='text-gray-200 bg-[#43475a]' value=""></option>
                <option className='text-gray-200 bg-[#43475a]' value="Менеджер">Менеджер</option>
                <option className='text-gray-200 bg-[#43475a]' value="Админ">Админ</option>
              </select>
            </div>
          </div>
        </div>
        <InputNew
          error={formik.errors.email}
                  touched={formik.touched.email}
                  onChange={formik.handleChange}
          name="email"
          label="Почта"
          placeholder="Введите почту"
          type="email"
          autoComplete="email">
          <AtSymbolIcon className="h-5 text-gray-400 px-2" />
        </InputNew>
        <InputNew
          error={formik.errors.password}
                  touched={formik.touched.password}
                  onChange={formik.handleChange}
          name="password"
          label="Пароль"
          placeholder="Введите пароль"
          type="password"
          autoComplete="new-password">
          <KeyIcon className="h-5 text-gray-400 px-2" />
        </InputNew>
        {
          registerLoading ? <button disabled type="button"
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
            Зарегистрироваться
          </button>
        }
      </form>
    </div>
  );
};

export default RegistrationForm;
