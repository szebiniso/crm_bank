import React, {useState} from 'react';
import Input from "../../../shared/ui/Input";
import {AtSymbolIcon} from "@heroicons/react/24/outline";
import {Bars3BottomLeftIcon,BuildingOfficeIcon, CameraIcon, PhoneIcon, RectangleGroupIcon} from "@heroicons/react/24/outline";
import {useDispatch} from "react-redux";
import InputTextArea from "../../../shared/ui/InputTextArea";

const OrganizationForm = ({
                            title, titleChange,
                            type, typeChange,
                            description, descriptionChange,
                            orgEmail, orgEmailChange,
                            orgPhone, orgPhoneChange,
                            orgImage, orgImageChange,
                            formik
}) => {

  const [imgFile, setImg] = useState();

  const dispatch = useDispatch()

  const onImageChange = (event) => {
    const file = event.target.files?.[0];
    setImg(file);

    if (event.target.files?.[0]) {
      orgImageChange(URL.createObjectURL(event.target.files?.[0]));
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
            src={orgImage}
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
        <Input value={title} onChange={(e) => titleChange(e.target.value)} type='text' placeholder='Введите имя' name='1' label='Название' >
          <BuildingOfficeIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Input value={type} onChange={(e) => typeChange(e.target.value)} type='text' placeholder='Введите фамилию' name='2' label='Тип деятельности' >
          <RectangleGroupIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <InputTextArea value={description} name='3' onChange={(e) => descriptionChange(e.target.value)} placeholder="Введите описание..." label='Описание' row='3'/>

        <Input value={orgEmail} onChange={(e) => orgEmailChange(e.target.value)} type='text' placeholder='Введите почту' name='3' label='Почта' >
          <AtSymbolIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Input value={orgPhone} onChange={(e) => orgPhoneChange(e.target.value)} type='text' placeholder='Введите номер телефона' name='3' label='Контакты' >
          <PhoneIcon className="h-5 text-gray-400 px-2" />
        </Input>
      </div>
    </div>
  );
};

export default OrganizationForm;
