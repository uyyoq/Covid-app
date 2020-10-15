//STORE
import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer from "./reducer/index"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// let store

const persistConfig = {
  key: 'covidNews',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function initializeStore(preloadedState) {
  return createStore(persistedReducer, preloadedState,  composeWithDevTools(applyMiddleware(thunkMiddleware)) )
}


export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
