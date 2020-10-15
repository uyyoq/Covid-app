import React from 'react'
import { useSelector,useDispatch } from "react-redux";

const buttonForm = () => {
  const step = useSelector(state => state.formReducer.step)
  const dispatch = useDispatch();
  const handleContinue = () => {
    dispatch({type: CONTINUE})
  }

  const handlePrevious = () => {
    dispatch({type: PREVIOUS})
  }


  const checkstepforButton = (params) => {
    switch (params) {
      case 1:
        return <Button1 />
      
      case 2:
        return <Button2 />
      default:
      null
    }
  }
  
  let Button1 = () => {
    return(
      <>
      <button onClick={handleContinue}>Next</button>
      </>
    )
  }
  
  let Button2 = () => {
      return (
      <>
      <button onClick={handleContinue}>Previous</button>
      <button onClick={handlePrevious}>Next</button>
      </>
    )
  }


  return (
    <>
      {checkstepforButton(step)}
    </>
  )
}

export default buttonForm;