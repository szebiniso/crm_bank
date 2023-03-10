import React, { ChangeEvent, useState } from "react";
import { CameraIcon } from "@heroicons/react/20/solid";
import Button from "../../../shared/ui/Button";
import { useFormik } from "formik";
import axios from "axios";
import {useDispatch} from "react-redux";
import {createUser, getUserById} from "../api/UsersSliceFunctions";

export default function UserCreateForm({closeModal}) {
  const [imgFile, setImg] = useState();
  const [image, setImage] = useState();

  const dispatch = useDispatch()

  const onImageChange = (event) => {
    const file = event.target.files?.[0];
    setImg(file);

    if (event.target.files?.[0]) {
      setImage(URL.createObjectURL(event.target.files?.[0]));
    }
  };

  const formik = useFormik({
    initialValues: {
      // photo: imgFile,
      first_name: "",
      last_name: "",
      position: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      // console.log("img", imgFile);
      // const fData = new FormData();
      // fData.append("photo", imgFile, imgFile.name);
      // fData.append("first_name", values.first_name);
      // fData.append("last_name", values.last_name);
      // fData.append("position", values.position);
      const data = {values, closeModal}
      dispatch(createUser(data))
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
            name="photo"
            id="image"
            // value={formik.values.????????}
            className="invisible absolute"
          />
        </div>
        <div className="w-full">
          <div className="mb-3">
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-gray-300 dark:text-white"
            >
              ??????
            </label>
            <input
              onChange={formik.handleChange}
              type="text"
              name="first_name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="?????????????? ??????"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="brand"
              className="block mb-1 text-sm font-medium text-gray-300 dark:text-white"
            >
              ??????????????
            </label>
            <input
              onChange={formik.handleChange}
              type="text"
              name="last_name"
              id="brand"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="?????????????? ??????????????"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="price"
              className="block mb-1 text-sm font-medium text-gray-300 dark:text-white"
            >
              ??????????????
            </label>
            <input
              onChange={formik.handleChange}
              name="position"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="?????????????? ??????????????"
            />
          </div>
          <Button lock={false} title="??????????????" type="submit" />
        </div>
      </form>
    </>
  );
}
