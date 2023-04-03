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

const EditOrganization = ({closeModal}) => {

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

  return (
    <div className="flex flex-col items-center ">
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
        <Input type='text' placeholder='Введите имя' name='1' label='Название' >
          <BuildingOfficeIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Input type='text' placeholder='Введите фамилию' name='2' label='Тип деятельности' >
          <RectangleGroupIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Input type='text' placeholder='Описание' name='3' label='Описание' >
          <Bars3BottomLeftIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Input type='text' placeholder='Введите почту' name='3' label='Почта' >
          <AtSymbolIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Input type='text' placeholder='Введите номер телефона' name='3' label='Контакты' >
          <PhoneIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Button type="submit" text='Редактировать'/>

      </div>
    </div>
  );
};

export default EditOrganization;
