export const INITIAL_STATE = {
  step: 1,
}

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CONTINUE":
      return {
        ...state,
        step: state.step + 1
      }

      case "PREVIOUS":
      return {
        ...state,
        step: state.step - 1
      }
    default:
      return state
  }
}

export default formReducer