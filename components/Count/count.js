import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { HANDLE_MINUS, HANDLE_PLUS } from "../../appredux/actionType/countActionType"

const Container = styled.div`
  padding: 0;
  margin: 0;
`

const Plus = styled.button`

`
const Minus = styled.button`

`
const Number = styled.p`

`
const Count = (props) => {

  return (
    <Container >
      <Plus onClick={props.plus}>+</Plus>
      <Number>{props.count}</Number>
      <Minus onClick={props.minus}>-</Minus>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.countReducer.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => dispatch({ type: HANDLE_PLUS }),
    minus: () => dispatch({ type: HANDLE_MINUS }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)  