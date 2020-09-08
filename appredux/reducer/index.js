import { combineReducers } from 'redux'
import listArticlesReducer from "./listArticlesReducer"
import navbarReducer from "./navbarReducer"

const rootReducer = combineReducers({
  listArticlesReducer,
  navbarReducer
});


export default rootReducer


// export default combineReducers({
//   navbarReducer: navbarReducer,
//   listArticlesReducer :listArticlesReducer
// })