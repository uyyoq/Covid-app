import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux';


const Wrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const ListAlamat = styled.div`
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
  margin: 10px;
  padding: 10px 15px ;
  cursor: pointer;
`
const InputAlamat = styled.input`
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
`

const LabelAlamat = styled.label`
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
`

const validationSchema = Yup.object({
  alamat: Yup.string().required('Tidak boleh kosong!').max(30, 'Maksimal 30 karakter'),
  kecamatan: Yup.string().required('Tidak boleh kosong!'),
  kodePos: Yup.string().required('Tidak boleh kosong!').matches(/^[0-9]{5}$/, 'masukkan 5 karakter'),
});

const initialValues = {
  alamat: '',
  kecamatan: '',
  kodePos: ''
}

const onSubmit = values => {
  console.log("Form values", values);
}

const DataAlamat = (props) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  const dispatch = useDispatch();
  const handleContinue = () => {
    dispatch({type: CONTINUE})
  }

  const handlePrevious = () => {
    dispatch({type: PREVIOUS})
  }

  return (
    <div>
      <Wrapper>
        <ListAlamat>
          <LabelAlamat htmlFor="alamat">Alamat Lengkap</LabelAlamat>
          <InputAlamat
            type="text"
            id="alamat"
            name="alamat"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.alamat}

          />
          {formik.touched.alamat && formik.errors.alamat ? (
            <Error>{formik.errors.alamat}</Error>
          ) : null}
        </ListAlamat>

        <ListAlamat>
          <LabelAlamat htmlFor="kecamatan">Kecamatan</LabelAlamat>
          <InputAlamat
            type="kecamatan"
            id="kecamatan"
            name="kecamatan"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.kecamatan}
          />
          {formik.touched.kecamatan && formik.errors.kecamatan ? (
            <Error>{formik.errors.kecamatan}</Error>
          ) : null}
        </ListAlamat>

        <ListAlamat>
          <LabelAlamat htmlFor="kodePos">Kode Pos</LabelAlamat>
          <InputAlamat
            type="kodePos"
            id="kodePos"
            name="kodePos"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.kodePos}
          />
          {formik.touched.kodePos && formik.errors.kodePos ? (
            <Error>{formik.errors.kodePos}</Error>
          ) : null}
        </ListAlamat>
      </Wrapper>
    </div>
  )
}

export default DataAlamat

