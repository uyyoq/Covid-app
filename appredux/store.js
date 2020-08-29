//STORE
import { useMemo } from 'react'
import { createStore } from 'redux'

let store

// Global state
const INITIAL_STATE = {
  isClose: true,
  isFetch: false,

  showInfo: true, //SHOW INFO GLOBAL STATE
  isNotif: true
}


// REDUCER
const reducerForm = (state = INITIAL_STATE, action) => {
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



// CONFIGURATION
function initStore(preloadedState = INITIAL_STATE ) {
  return createStore(
    reducerForm,
    preloadedState,
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}