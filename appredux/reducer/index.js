import { combineReducers } from 'redux'
import listArticlesReducer from "./listArticlesReducer"
import navbarReducer from "./navbarReducer"
import countReducer from "./countReducer"

const rootReducer = combineReducers({
  countReducer,
  listArticlesReducer,
  navbarReducer
});

export default rootReducer

// export default combineReducers({
//   navbarReducer: navbarReducer,
//   listArticlesReducer :listArticlesReducer
// })