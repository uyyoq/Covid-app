import axios from "axios"

const actionFetch = () => {
  return async function (dispatch, getState) {
    const result = await axios("https://newsapi.org/v2/everything?q=covid&apiKey=4055e2c89faa40e384b1dd16c0daef44",);
    await dispatch({type: "SET_DATA", playload: result.data.articles})
  }
}

export default actionFetch;