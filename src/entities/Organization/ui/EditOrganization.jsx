import React, {useState} from 'react';
import {
  AtSymbolIcon,
  Bars3BottomLeftIcon,
  BuildingOfficeIcon,
  CameraIcon, PhoneIcon,
  RectangleGroupIcon
} from "@heroicons/react/24/outline";
import Input from "../../../shared/ui/Input";
import {useDispatch, useSelector} from "react-redux";
import Button from "../../../shared/ui/Button";
import {useFormik} from "formik";
import {editOrganization} from "../api/OrganizationApi";
import InputTextArea from "../../../shared/ui/InputTextArea";
import {setFile} from "../../../shared/utils/setFile";

const EditOrganization = ({closeModal, organization, closeDetailsModal}) => {

  const [imgFile, setImg] = useState();
  const [image, setImage] = useState(organization.photo);

  const dispatch = useDispatch()
  const {loading} = useSelector(state => state.organization)

  const onImageChange = (event) => {
    const file = event.target.files?.[0];
    setImg(file);

    if (event.target.files?.[0]) {
      setImage(URL.createObjectURL(event.target.files?.[0]));
    }
  };



  const formik = useFormik({
    initialValues: organization,
    onSubmit: values => {
      console.log("edit", values)
      const data = {closeModal, values, closeDetailsModal}
      dispatch(editOrganization(data))
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
            src={setFile(image)}
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
        <Input onChange={formik.handleChange} value={formik.values.name} type='text' placeholder='Введите имя' name='name' label='Название' >
          <BuildingOfficeIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Input onChange={formik.handleChange} value={formik.values.field} type='text' placeholder='Введите фамилию' name='field' label='Тип деятельности' >
          <RectangleGroupIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <InputTextArea  onChange={formik.handleChange} value={formik.values.description} type='text' placeholder='Описание' name='description' label='Описание' row='2'/>

        <Input onChange={formik.handleChange} value={formik.values.email} type='text' placeholder='Введите почту' name='email' label='Почта' >
          <AtSymbolIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Input onChange={formik.handleChange} value={formik.values.phone_number} type='text' placeholder='Введите номер телефона' name='phone_number' label='Контакты' >
          <PhoneIcon className="h-5 text-gray-400 px-2" />
        </Input>
        {
          loading ? <Button disabled type="button" loading='true'/> : <Button type="submit" text='Редактировать'/>
        }

      </div>
    </form>
  );
};

export default EditOrganization;
