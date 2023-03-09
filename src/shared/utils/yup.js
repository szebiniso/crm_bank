import * as yup from "yup";

export const AuthSchema = yup.object().shape({
  email: yup
    .string()
    .email("Введите действительный пароль")
    .required("Обязательное поле"),
  password: yup.string().required("Обязательное поле"),
});

export const RegisterSchema = yup.object().shape({
  first_name: yup.string().required("Обязательное поле"),
  last_name: yup.string().required("Обязательное поле"),
  phone_number: yup.string().required("Обязательное поле"),
  email: yup
    .string()
    .email("Введите действительный пароль")
    .required("Обязательное поле"),
  password: yup.string().required("Обязательное поле"),
  role: yup.string().required("Обязательное поле"),
});
