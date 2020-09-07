// Global state
export const INITIAL_STATE = {
  isClose: true,
  isFetch: false,

  showInfo: true, //SHOW INFO GLOBAL STATE
  isNotif: true,
  data: []
}

const navbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_IS_CLOSE":
      return {
        ...state,
        inClose: !state.isClose
      }
    
    case "CHANGE_IS_FETCH":
      return {
        ...state,
        inClose: !state.isFetch
      }

      
    case "HANDLE_SHOW_INFO":
      return {
        ...state,
        showInfo: !state.showInfo,
        isNotif: !state.isNotif
      }
    default:
      return state
  }
}

export default navbarReducer