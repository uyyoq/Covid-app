import { combineReducers } from 'redux'
import listArticlesReducer from "./listArticlesReducer"
import navbarReducer from "./navbarReducer"
import countReducer from "./countReducer"
import formReducer from "./formReducer"

const rootReducer = combineReducers({
  countReducer,
  listArticlesReducer,
  navbarReducer,
  formReducer
});

export default rootReducer

// export default combineReducers({
//   navbarReducer: navbarReducer,
//   listArticlesReducer :listArticlesReducer
// })