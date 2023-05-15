import React from 'react';
import Input from "../../../shared/ui/Input";
import {CalendarDaysIcon} from "@heroicons/react/24/outline";
import Button from "../../../shared/ui/Button";
import {useFormik} from "formik";
import {createIteration, editIteration} from "../api/IterationApi";
import {useDispatch, useSelector} from "react-redux";
import {Bars2Icon} from "@heroicons/react/20/solid";
import {useParams} from "react-router-dom";

const EditIteration = ({iteration, closeModal}) => {

  const dispatch = useDispatch()

  console.log('ss', iteration)
  const {id} = useParams()

  const {loading} = useSelector(state => state.projects)

  const formik = useFormik({
    initialValues: iteration,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      const data = {values, closeModal, project_id: id}
      dispatch(editIteration(data))
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col justify-center items-center "
      action="src/entities/Users/ui#"
    >
      <div className="w-full flex flex-col gap-7 z-10">
        <Input onChange={formik.handleChange} type='text' placeholder='' name='name' label='Название' >
          <Bars2Icon className="h-5 text-gray-400 px-2" />
        </Input>

        <Input onChange={formik.handleChange} type='date' placeholder='' value={formik.values.start_date} name='start_date' label='Дата начала' >
          <CalendarDaysIcon className="h-5 text-gray-400 px-2" />
        </Input>

        <Input onChange={formik.handleChange} type='date' placeholder='' value={formik.values.end_date} name='end_date' label='Дата окончания' >
          <CalendarDaysIcon className="h-5 text-gray-400 px-2" />
        </Input>

        {
          loading ? <Button disabled type="button" loading='true'/> : <Button type="submit" text='Редактировать'/>
        }
      </div>
    </form>
  );
};

export default EditIteration;
