export const INITIAL_STATE = {
  data: []
}

const listArticlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data
      }
    
    case "SET_DATA2":
      return {
        ...state,
        data
      }
    default:
      return state
  }
}

export default listArticlesReducer