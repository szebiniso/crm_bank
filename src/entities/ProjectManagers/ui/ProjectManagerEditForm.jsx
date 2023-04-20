import React, {useEffect, useState} from "react";
import { CameraIcon } from "@heroicons/react/20/solid";
import Button from "../../../shared/ui/Button";
import { useFormik } from "formik";
import {useDispatch, useSelector} from "react-redux";
import {editUser, getUserById} from "../../Users/api/UsersSliceFunctions";
import Input from "../../../shared/ui/Input";
import {
  AtSymbolIcon,
  Bars3BottomLeftIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  RectangleGroupIcon, UserIcon
} from "@heroicons/react/24/outline";

export default function ProjectManagerEditForm({user, closeModal}) {
  const [img, setImg] = useState();
  const [image, setImage] = useState();

  const dispatch = useDispatch()
  const {loading} = useSelector(state => state.users)


  const onImageChange = (event) => {
    if (event.target.files) {
      setImg(event.target.files[0]);
    }

    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const formik = useFormik({
    initialValues: user,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      const data = {values, closeModal}
      dispatch(editUser(data))
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col items-center ">
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
              src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'
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
          <Input value={formik.values.first_name} error={formik.errors.email} touched={formik.touched.first_name} onChange={formik.handleChange} type='text' placeholder='Введите имя' name='first_name' label='Имя' >
            <UserIcon className="h-5 text-gray-400 px-2" />
          </Input>

          <Input value={formik.values.last_name} error={formik.errors.email} touched={formik.touched.last_name} onChange={formik.handleChange} type='text' placeholder='Введите фамилию' name='last_name' label='Фамилия' >
            <UserIcon className="h-5 text-gray-400 px-2" />
          </Input>

          <Input value={formik.values.email} error={formik.errors.email} touched={formik.touched.email} onChange={formik.handleChange} type='text' placeholder='Введите почту' name='email' label='Почта' >
            <AtSymbolIcon className="h-5 text-gray-400 px-2" />
          </Input>

          <Input value={formik.values.phone_number} error={formik.errors.email} touched={formik.touched.phone_number} onChange={formik.handleChange} type='text' placeholder='Введите номер телефона' name='phone_number' label='Номер телефона' >
            <PhoneIcon className="h-5 text-gray-400 px-2" />
          </Input>

          {
            loading ? <Button disabled type="button" loading='true'/> : <Button type="submit" text='Редактировать'/>
          }

        </div>
      </form>
    </>
  );
}
