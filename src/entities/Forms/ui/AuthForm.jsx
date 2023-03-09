import React from "react";
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";
import ForgetPassword from "../../../features/ui/ForgetPassword";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AuthApi } from "../api/authApi";
import { AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";
import { AuthSchema } from "../../../shared/utils/yup";
import {useDispatch} from "react-redux";

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: AuthSchema,
    onSubmit: (data) => {
      console.log(data);
      const data_obj = { data, navigate };
      dispatch(AuthApi(data_obj));
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
        <Input
          error={formik.errors.password}
          touched={formik.touched.password}
          onChange={formik.handleChange}
          name="password"
          label="Пароль"
          placeholder="Пароль"
          type="password"
          autoComplete="current-password"
        >
          <KeyIcon className="h-5 h-5 text-gray-400" />
        </Input>
        <ForgetPassword />
        <Button lock={true} link="" title="Войти" type="submit" />
        <div className="mt-14 flex items-center justify-center gap-1">
          <p>Нет аккаунта? </p>
          <div className="text-sm">
            <NavLink to="/registration">
              <div className="font-medium text-indigo-600 hover:text-indigo-500">
                Зарегистрироваться
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
