//STORE
import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
// import navbarReducer,{INITIAL_STATE} from "./reducer/navbarReducer"
import rootReducer from "./reducer"

// let store

// CONFIGURATION
function initStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function initializeStore(preloadedState) {
  return createStore(persistedReducer, preloadedState,  composeWithDevTools(applyMiddleware(thunkMiddleware)) )
}


export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
