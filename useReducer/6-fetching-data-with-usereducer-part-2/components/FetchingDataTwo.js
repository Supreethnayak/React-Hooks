// Problem: fetching data using axios and useReducer

// Steps:
// grouping related state variables - initailState
// and grouping state transitions - return { ...currentState, data: action.value, loading: false };

import axios from "axios";
import { useEffect, useReducer } from "react";
// defining initialState and reducer function outside of component function
const initailState = {
  loading: true,
  data: {},
  error: ""
};
//2. accepts currentState, action, returns new state
const reducer = (currentState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...currentState, data: action.value, loading: false };
    case "FETCH_ERROR":
      return { ...initailState, error: "Something went wrong", loading: false };
    default:
      return currentState;
  }
};

export default function FetchingDataTwo() {
  //1. accepts reducer, intialState, returns [newState,dispatch]
  const [newState, dispatch] = useReducer(reducer, initailState);
  useEffect(() => {
    // axios.get() returns a Promise
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", value: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <>
      {newState.loading ? "Loading..." : newState.data.title}
      {newState.error && newState.error}
    </>
  );
}
