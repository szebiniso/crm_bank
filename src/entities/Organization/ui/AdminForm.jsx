import React, {useState} from 'react';
import Input from "../../../shared/ui/Input";
import {AtSymbolIcon, KeyIcon, CameraIcon, PhoneIcon, UserIcon} from "@heroicons/react/24/outline";
import {useDispatch} from "react-redux";
import PasswordInput from "../../../shared/ui/PasswordInput";

const AdminForm = ({
                     name, nameChange,
                     surname, surnameChange,
                     email, emailChange,
                     phone, phoneChange,
                     password, passwordChange,
                     image, imageChange,
                     formik,
}) => {

  const [imgFile, setImg] = useState();

  const dispatch = useDispatch()

  const onImageChange = (event) => {
    const file = event.target.files?.[0];
    setImg(file);

    if (event.target.files?.[0]) {
      imageChange(URL.createObjectURL(event.target.files?.[0]));
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
        <Input value={name} onChange={(e) => nameChange(e.target.value)} type='text' placeholder='Введите имя' name='1' label='Имя' >
          <UserIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Input value={surname} onChange={(e) => surnameChange(e.target.value)} type='text' placeholder='Введите фамилию' name='2' label='Фамилия' >
          <UserIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Input value={email} onChange={(e) => emailChange(e.target.value)} type='text' placeholder='Введите почту' name='3' label='Почта' >
          <AtSymbolIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Input value={phone} onChange={(e) => phoneChange(e.target.value)} type='text' placeholder='Введите номер' name='3' label='Контакты' >
          <PhoneIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <PasswordInput value={password} onChange={(e) => passwordChange(e.target.value)} placeholder='Введите пароль' name='3' label='Пароль' >
          <KeyIcon className="h-5 text-gray-400 px-2" />
        </PasswordInput>
      </div>
    </div>
  );
};

export default AdminForm;
