import React from 'react'
import styled from "styled-components";
import Tahun from "../Teks/tahun";  

const Cont = styled.div`
display: flex;
justify-content: center;
  width: 100%;
  margin: 0 auto;
`

const TitleInfo = styled.h1`
font-size: 20px;
font-weight: bold;
`

const Title = (props) => {
  return (
   <Cont>
     <TitleInfo >Total Kasus Covid19 di Indonesia</TitleInfo>
     <Tahun />
    </Cont >
  )
}

export default Title