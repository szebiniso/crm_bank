import React, { useState } from "react";
import Button from "../../../shared/ui/Button";
import { useFormik } from "formik";
import {useDispatch, useSelector} from "react-redux";
import {createUser} from "../../Users/api/UsersSliceFunctions";
import AdminForm from "./AdminForm";
import OrganizationForm from "./OrganizationForm";
import forgetPassword from "../../../features/ui/ForgetPassword";
import organizationForm from "./OrganizationForm";
import {createOrganization} from "../api/OrganizationApi";

export default function OrganizationWithAdminCreateForm({closeModal}) {

  const [tab, setTab] = useState('organization');
  const {loading} = useSelector(state => state.organization)

  // Admin
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState();
  const [imageObj, setImageObj] = useState();


  // Organization
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [orgEmail, setOrgEmail] = useState('');
  const [orgPhone, setOrgPhone] = useState('');
  const [orgImage, setOrgImage] = useState();
  const [orgImageObj, setOrgImageObj] = useState();

  console.log('imgg', orgImage)

  const hasNotEmptyField = name && surname && email && phone && password && title && type && description && orgEmail && orgPhone

  const dispatch = useDispatch()

  const formik = useFormik({
    enableReinitialize: true,
    onSubmit: () => {
      const fData = new FormData();
      // organization
      fData.append("photo", orgImage);
      fData.append("name", title);
      fData.append("description", description);
      fData.append("field", type);
      fData.append("email", orgEmail);
      fData.append("phone_number", orgPhone);
      // admin
      fData.append("admin.photo", image);
      fData.append("admin.first_name", name);
      fData.append("admin.phone_number", phone);
      fData.append("admin.last_name", surname);
      fData.append("admin.email", email);
      fData.append("admin.password", password);
      const data = {fData, closeModal}
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
        orgImage={orgImage} orgImageChange={setOrgImage}
        orgImageObj={orgImageObj} setOrgImageObj={setOrgImageObj}
        title={title} titleChange={setTitle}
        type={type} typeChange={setType}
        description={description} descriptionChange={setDescription}
        orgEmail={orgEmail} orgEmailChange={setOrgEmail}
        orgPhone={orgPhone} orgPhoneChange={setOrgPhone}
      /> : <AdminForm
        image={image} imageChange={setImage}
        imageObj={imageObj} setImageObj={setImageObj}
        name={name} nameChange={setName}
        surname={surname} surnameChange={setSurname}
        email={email} emailChange={setEmail}
        phone={phone} phoneChange={setPhone}
        password={password} passwordChange={setPassword}
      />}
      <div className='w-full flex flex-col mt-7'>
        {
          loading ? <Button disabled type="button" loading='true'/> : <Button toolExist='true' disabled={!hasNotEmptyField} type="submit" text='Создать'/>
        }
      </div>
    </form>
  );
}
