import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from "styled-components"


const Wrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const ListForm = styled.div`
  padding: 8px; 
`
const Error = styled.div`
  color: red;
`
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

const ExampleForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  return (
    <div>
      <Wrapper>
        <ListForm>
          <LabelForm htmlFor="nama">Nama Lengkap</LabelForm>
          <InputForm
            type="text"
            id="nama"
            name="nama"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nama}

          />
          {formik.touched.nama && formik.errors.nama ? (
            <Error>{formik.errors.nama}</Error>
          ) : null}
        </ListForm>

        <ListForm>
          <LabelForm htmlFor="email">E-mail</LabelForm>
          <InputForm
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Error>{formik.errors.email}</Error>
          ) : null}
        </ListForm>
        <WrapBtn>
          <BtnSubmit type="submit"> Daftar </BtnSubmit>
        </WrapBtn>

      </Wrapper>
    </div>
  )
}


export default ExampleForm;
