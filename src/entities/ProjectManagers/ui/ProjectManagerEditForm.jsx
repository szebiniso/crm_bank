import React, {ChangeEvent, useEffect, useState} from "react";
import { CameraIcon } from "@heroicons/react/20/solid";
import Button from "../../../shared/ui/Button";
import { useFormik } from "formik";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {editUser, getUserById} from "../api/UsersSliceFunctions";

export default function UserEditForm({userId, closeModal}) {
  const [img, setImg] = useState();
  const [image, setImage] = useState();

  const dispatch = useDispatch()
  const {userById} = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getUserById(userId))
  }, []);

  const onImageChange = (event) => {
    if (event.target.files) {
      setImg(event.target.files[0]);
    }

    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const formik = useFormik({
    initialValues: {
      // photo: img,
      first_name: userById.first_name,
      last_name: userById.last_name,
      position: userById.position,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      // const fData = new FormData();
      // fData.append("photo", img, img.name);
      // fData.append("first_name", values.first_name);
      // fData.append("last_name", values.last_name);
      // fData.append("position", values.position);
      const data = {values, userId, closeModal}
      dispatch(editUser(data))
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-center"
        action="#"
      >
        <div>
          <label
            htmlFor="image"
            className="cursor-pointer w-44 h-48 t-4 bg-white shadow-gray rounded-lg relative flex justify-center mb-6"
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
            name="image"
            id="image"
            // value={formik.values.фото}
            className="invisible absolute"
          />
        </div>
        <div className="w-full">
          <div className="mb-3">
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-gray-300 dark:text-white"
            >
              Имя
            </label>
            <input
              onChange={formik.handleChange}
              type="text"
              name="first_name"
              id="name"
              value={formik.values.first_name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Введите имя"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="brand"
              className="block mb-1 text-sm font-medium text-gray-300 dark:text-white"
            >
              Фамилия
            </label>
            <input
              onChange={formik.handleChange}
              type="text"
              name="last_name"
              id="brand"
              value={formik.values.last_name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Введите фамилию"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="price"
              className="block mb-1 text-sm font-medium text-gray-300 dark:text-white"
            >
              Позиция
            </label>
            <input
              onChange={formik.handleChange}
              name="position"
              id="price"
              value={formik.values.position}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Введите позицию"
            />
          </div>
          <Button lock={false} title="Редактировать" type="submit" />
        </div>
      </form>
    </>
  );
}
