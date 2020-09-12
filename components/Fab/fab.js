import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux"
import {HANDLE_SHOW_INFO} from "../../appredux/actionType/navbarActionType"

const Container = styled.div`
 &:active{
  padding: 0;
  margin: 0;
  opacity: 0.7;
 }
`
const ImgIcon = "/chart.svg"

const Icon = styled.img`
 position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  box-shadow: 2px 2px 3px #999;
  cursor: pointer;
`
 const Notif = styled.div`
  display: flex;
  background: red;
  position: fixed;
  z-index: 100;
  width: 20px;
  height: 20px;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
 `

const Fab = (props) => {
  // 1.  munculkan notif saat isnotif = true di indonesia
//  2. notif hide saat state = false
// 3. close button diklik notif dihide

  return (
      <Container>
        <Icon 
        onClick={props.handleShowInfo}
         src={ImgIcon} alt="image-Fab" />
        {
         props.isNotif ? (<Notif />) : (null)
        }
      </Container>
    )
}

const mapStateToProps = (state) => {
  return {
    isNotif: state.navbarReducer.isNotif
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowInfo: () => dispatch({type: HANDLE_SHOW_INFO})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fab)