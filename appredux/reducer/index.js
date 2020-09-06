import { combineReducers } from 'redux'
import listArticlesReducer from "./listArticlesReducer"
import navbarReducer from "./navbarReducer"

export default combineReducers({
  navbarReducer: navbarReducer,
  listArticlesReducer :listArticlesReducer
})