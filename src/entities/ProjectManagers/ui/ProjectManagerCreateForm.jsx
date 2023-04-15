import React, { useState } from "react";
import { CameraIcon } from "@heroicons/react/20/solid";
import Button from "../../../shared/ui/Button";
import { useFormik } from "formik";
import {useDispatch, useSelector} from "react-redux";
import Input from "../../../shared/ui/Input";
import {AtSymbolIcon, KeyIcon, PhoneIcon, UserIcon} from "@heroicons/react/24/outline";
import {createUser} from "../../Users/api/UsersSliceFunctions";
import PasswordInput from "../../../shared/ui/PasswordInput";

export default function ProjectManagerCreateForm({closeModal}) {
  const [imgFile, setImg] = useState();
  const [image, setImage] = useState();

  const dispatch = useDispatch()
  const {loading} = useSelector(state => state.users)

  const onImageChange = (event) => {
    const file = event.target.files?.[0];
    setImg(file);

    if (event.target.files?.[0]) {
      setImage(URL.createObjectURL(event.target.files?.[0]));
    }
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      role: "Менеджер",
      password: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      const data = {values, closeModal}
      dispatch(createUser(data))
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-center "
        action="#"
      >
        <div>
          <label
            htmlFor="image"
            className="cursor-pointer w-32 h-36 t-4 bg-transparent shadow-blue border border-[#3e9db4] rounded-lg relative flex justify-center mb-6"
          >
            <div className="w-full h-full flex justify-center items-center">
              <CameraIcon className="h-12 w-12 text-gray-500" />
            </div>
            <img
              className="absolute t-0 w-full h-full rounded-lg object-cover"
              src={image}
              alt=""
            />
          </label>
          <input
            onChange={onImageChange}
            type="file"
            name="photo"
            id="image"
            // value={formik.values.фото}
            className="invisible absolute"
          />
        </div>
        <div className="w-full flex flex-col gap-7 z-10">
          <Input error={formik.errors.email} touched={formik.touched.email} onChange={formik.handleChange} type='text' placeholder='Введите имя' name='first_name' label='Имя' >
            <UserIcon className="h-5 text-gray-400 px-2" />
          </Input>

          <Input error={formik.errors.email} touched={formik.touched.email} onChange={formik.handleChange} type='text' placeholder='Введите фамилию' name='last_name' label='Фамилия' >
            <UserIcon className="h-5 text-gray-400 px-2" />
          </Input>

          <Input error={formik.errors.email} touched={formik.touched.email} onChange={formik.handleChange} type='text' placeholder='Введите почту' name='email' label='Почта' >
            <AtSymbolIcon className="h-5 text-gray-400 px-2" />
          </Input>

          <Input error={formik.errors.email} touched={formik.touched.email} onChange={formik.handleChange} type='text' placeholder='Введите номер телефона' name='phone_number' label='Номер телефона' >
            <PhoneIcon className="h-5 text-gray-400 px-2" />
          </Input>

          <PasswordInput error={formik.errors.email} touched={formik.touched.email} onChange={formik.handleChange} type='text' placeholder='Введите пароль' name='password' label='Пароль'>
            <KeyIcon className="h-5 text-gray-400 px-2" />
          </PasswordInput>
          {
            loading ? <Button disabled type="button" loading='true'/> : <Button type="submit" text='Создать'/>
          }
        </div>
      </form>
    </>
  );
}
