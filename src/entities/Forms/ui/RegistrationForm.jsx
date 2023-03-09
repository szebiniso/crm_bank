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
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    onSubmit: (data) => {
      console.log(data);
      const data_obj = { data, navigate };
      dispatch(RegisterApi(data_obj));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      action="my-app/src/entities/Forms/ui#"
      method="POST"
    >
      <div className="flex flex-col bg-white px-4 py-5 sm:p-6">
        <Input
          error={formik.errors.first_name}
          touched={formik.touched.first_name}
          onChange={formik.handleChange}
          name="first_name"
          label="Имя"
          placeholder="Имя"
          type="text"
          autoComplete="first-name"
        >
          <UserCircleIcon className="h-5 h-5 text-gray-400" />
        </Input>
        <Input
          error={formik.errors.last_name}
          touched={formik.touched.last_name}
          onChange={formik.handleChange}
          name="last_name"
          label="Фамилия"
          placeholder="Фамилия"
          type="text"
          autoComplete="family-name"
        >
          <UserCircleIcon className="h-5 h-5 text-gray-400" />
        </Input>
        <Input
          error={formik.errors.phone_number}
          touched={formik.touched.phone_number}
          onChange={formik.handleChange}
          name="phone_number"
          label="Номер телефона"
          placeholder="Номер телефона"
          type="text"
          autoComplete="tel"
        >
          <PhoneIcon className="h-5 h-5 text-gray-400" />
        </Input>
        <Input
          error={formik.errors.email}
          touched={formik.touched.email}
          onChange={formik.handleChange}
          name="email"
          label="Почта"
          placeholder="Почта"
          type="email"
          autoComplete="email"
        >
          <AtSymbolIcon className="h-5 h-5 text-gray-400" />
        </Input>
        <div className="h-[5rem] mb-3 col-span-6 sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Должность
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <UserPlusIcon className="h-5 h-5 text-gray-400" />
            </div>
            <select
              onChange={formik.handleChange}
              name="role"
              className="bg-white-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Выберите должность</option>
              <option value="Менеджер">Менеджер</option>
              <option value="Админ">Админ</option>
            </select>
          </div>
          {formik.errors.role && formik.touched.role && (
            <p className="text-sm text-red-600 dark:text-red-500">
              {formik.errors.role}
            </p>
          )}
        </div>
        <Input
          error={formik.errors.password}
          touched={formik.touched.password}
          onChange={formik.handleChange}
          name="password"
          label="Пароль"
          placeholder="Пароль"
          type="password"
          autoComplete="new-password"
        >
          <KeyIcon className="h-5 h-5 text-gray-400" />
        </Input>
        {/*<Input label="Подтведите пароль" placeholder="Подтведите пароль" type='password'>*/}
        {/*    <KeyIcon className="h-5 h-5 text-gray-400" />*/}
        {/*</Input>*/}
        <Button lock={true} link="/" title="Зарегистрироваться" type="submit" />
      </div>
    </form>
  );
};

export default RegistrationForm;
