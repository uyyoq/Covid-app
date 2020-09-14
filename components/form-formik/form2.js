import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from "styled-components"


// const Wrapper = styled.form`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `
const ListForm = styled.div`
  padding: 8px; 
`
// const Error = styled.div`
//   color: red;
// `
const WrapBtn = styled.div`
  margin: 10px;
`

const BtnSubmit = styled.button`
  background-color: grey ;
  padding: 10px 15px ;
  cursor: pointer;
`
const InputForm = styled.input`
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
`

const LabelForm = styled.label`
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
`

const validationSchema = Yup.object({
  nama: Yup.string().required('Harus diisi!').min(3, 'Harus 3 karakter atau lebih!'),
  email: Yup.string().required('Harus diisi!').email('Format email tidak valid!'),
});

const initialValues = {
  nama: '',
  email: '',
}

const onSubmit = values => {
  console.log("Form values", values);
}

const FormIK = () => {
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      <Form>
        <ListForm>
          <LabelForm htmlFor="nama">Nama Lengkap</LabelForm>
          <Field
            type="text"
            id="nama"
            name="nama"
          />
          <ErrorMessage name="nama"/>
        </ListForm>

        <ListForm>
          <LabelForm htmlFor="email">E-mail</LabelForm>
          <Field
            type="email"
            id="email"
            name="email"
          />
         <ErrorMessage name="email" />
        </ListForm>
        <WrapBtn>
          <BtnSubmit type="submit"> Daftar </BtnSubmit>
        </WrapBtn>

      </Form>
    </Formik>
  )
}


export default FormIK;
