const redux = require("redux");
const createStore = redux.createStore
const initialState = {
  value: 0,
  age: 12
}
// 2.reducer = sebuah fungsi yang bisa mengubah store
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 1
      }
    case "CHANGE_VALUE":
      return {
        ...state,
        value: state.value + action.newValue
      }
    default:
      return state;
  }
}

// 1.Store = menyimpan state secara global

const store = createStore(rootReducer)
console.log(store.getState())

// 4.subcribtion = setiap ada perubahan pada store akan terpanggil
store.subscribe(() => {
  console.log("store change: ",store.getState())
})

// 3.dispacthing action = proses pemanggilan list" yg ada pada reducer

store.dispatch({ type: "ADD_AGE" })
store.dispatch({ type: "CHANGE_VALUE", newValue: 10 })
console.log(store.getState())

