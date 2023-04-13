import React, { useState } from "react";
import Button from "../../../shared/ui/Button";
import { useFormik } from "formik";
import {useDispatch} from "react-redux";
import {createUser} from "../../Users/api/UsersSliceFunctions";
import AdminForm from "./AdminForm";
import OrganizationForm from "./OrganizationForm";
import forgetPassword from "../../../features/ui/ForgetPassword";
import organizationForm from "./OrganizationForm";
import {createOrganization} from "../api/OrganizationApi";

export default function OrganizationWithAdminCreateForm({closeModal}) {

  const [tab, setTab] = useState('organization');

  // Admin
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState();


  // Organization
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [orgEmail, setOrgEmail] = useState('');
  const [orgPhone, setOrgPhone] = useState('');
  const [orgImage, setOrgImage] = useState();

  const hasNotEmptyField = name && surname && email && phone && password && title && type && description && orgEmail && orgPhone

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: title,
      field: type,
      description: description,
      email: orgEmail,
      phone_number: orgPhone,
      admin: {
        first_name: name,
        last_name: surname,
        phone_number: phone,
        email: email,
        password: password,
        // role: 'Менеджер'
      }
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      const data = {values, closeModal}
      dispatch(createOrganization(data))
    },
  })


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="border-b border-gray-200 mb-8">
        <ul className="flex text-center w-full -mb-px text-sm font-medium text-gray-500">
          <li className="flex-1" onClick={() => setTab('organization')}>
            <a href="#"
               style={tab === 'organization' ? {color:'#B99A47', borderBottom: '2px solid #B99A47'} : null}
               className="w-full text-lg justify-center inline-flex  border-b-2 border-gray-500 p-4 hover:text-gray-400 hover:border-gray-400 rounded-t-lg active group"
               aria-current="page">
              Организация
            </a>
          </li>
          <li className="flex-1" onClick={() => setTab('admin')}>
          <a href="#"
             style={tab === 'admin' ? {color:'#B99A47', borderBottom: '2px solid #B99A47'} : null}
             className="w-full text-lg justify-center inline-flex p-4 border-b-2 border-gray-500 rounded-t-lg hover:text-gray-400 hover:border-gray-400 group">
            Администратор
          </a>
        </li>
        </ul>
      </div>
      {tab === 'organization' ? <OrganizationForm
        formik={formik}
        orgImage={orgImage} orgImageChange={setOrgImage}
        title={title} titleChange={setTitle}
        type={type} typeChange={setType}
        description={description} descriptionChange={setDescription}
        orgEmail={orgEmail} orgEmailChange={setOrgEmail}
        orgPhone={orgPhone} orgPhoneChange={setOrgPhone}
      /> : <AdminForm
        formik={formik}
        image={image} imageChange={setImage}
        name={name} nameChange={setName}
        surname={surname} surnameChange={setSurname}
        email={email} emailChange={setEmail}
        phone={phone} phoneChange={setPhone}
        password={password} passwordChange={setPassword}
      />}
      <div className='w-full flex flex-col mt-7'>
        <Button toolExist='true' disabled={!hasNotEmptyField} type="submit" text='Создать'/>
      </div>
    </form>
  );
}
