import React, {useState} from 'react';
import {
  AtSymbolIcon,
  Bars3BottomLeftIcon,
  BuildingOfficeIcon,
  CameraIcon, PhoneIcon,
  RectangleGroupIcon
} from "@heroicons/react/24/outline";
import Input from "../../../shared/ui/Input";
import {useDispatch} from "react-redux";
import Button from "../../../shared/ui/Button";
import {useFormik} from "formik";
import {editOrganization} from "../../Organization/api/OrganizationApi";
import {editAdmin} from "../api/EditAdminApi";

const EditAdmin = ({closeModal, organization}) => {

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

  const admin = organization.admin_data

  const formik = useFormik({
    initialValues: organization,
    onSubmit: values => {
      console.log("edit", values)
      const data = {closeModal, values}
      dispatch(editAdmin(data))
    }
  })

  return (
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
        <Input onChange={formik.handleChange} value={formik.values.admin_data.first_name} type='text' placeholder='Введите имя' name='admin_data.first_name' label='Название' >
          <BuildingOfficeIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Input onChange={formik.handleChange} value={formik.values.admin_data.last_name} type='text' placeholder='Введите фамилию' name='admin_data.last_name' label='Фамилия' >
          <RectangleGroupIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Input onChange={formik.handleChange} value={formik.values.admin_data.email} type='text' placeholder='Введите почту' name='admin_data.email' label='Почта' >
          <AtSymbolIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Input onChange={formik.handleChange} value={formik.values.admin_data.phone_number} type='text' placeholder='Введите номер телефона' name='admin_data.phone_number' label='Контакты' >
          <PhoneIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Button type="submit" text='Редактировать'/>

      </div>
    </form>
  );
};

export default EditAdmin;
