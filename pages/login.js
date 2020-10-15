import React from 'react'
import DataDiri from '../components/form-formik/dataDiri'
import DataAlamat from '../components/form-formik/dataAlamat';
import { useSelector } from "react-redux";
import ButtonForm from "../components/buttonForm/buttonForm"

const checkStepForm = (params) => {
  switch (params) {
    case 1:
      return <DataDiri />

    case 2:
      return <DataAlamat />

    default:
      return null
  }
}

function login() {
  const step = useSelector(state => state.formReducer.step)
  return (
    <div>
    {checkStepForm(step)}
    <ButtonForm />
    </div>
  )
}

export default login