export const INITIAL_STATE = {
  data: []
}


const listArticlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload
      }

    //ini tidak dipakai
    case "SET_DATA2":
      return {
        ...state,
        data: action.payload
      }


    default:
      return state
  }
}

export default listArticlesReducer