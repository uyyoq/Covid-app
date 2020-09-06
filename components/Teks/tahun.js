import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import {HANDLE_SHOW_INFO} from "../../appredux/actionType/navbarActionType"

const Cont = styled.div`

`
const Text = styled.h1`
  font-size: 20px;
font-weight: bold;
cursor: pointer;
margin-left: 5px;
color: ${props => props.isRed ? "red" : "white" };
  `

function Tahun(props) {
  return (
   <Cont>
    <Text isRed={props.showInfo}  onClick={props.handleShowInfo}> Tahun 2020</Text>
   </Cont>
  )
}

const mapStateToProps = (state) => {
  return {
 showInfo: state.showInfo
}  
}

const mapDispactToProps = (dispatch) => {
  return {
    handleShowInfo: () => dispatch({type: HANDLE_SHOW_INFO})
  }
}

export default connect(mapStateToProps, mapDispactToProps)(Tahun)
