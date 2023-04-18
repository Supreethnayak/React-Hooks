// Problem: creating mutiple counters

// advantage of complex useReducer
// (making state and action as object)
// -> action as object - aditional values can be sent from dispatch -  value: 1
// -> state as object - keep track of multiple state variables - secondCounter
import { useReducer } from "react";
const intialState = {
  firstCounter: 0,
  secondCounter: 0
};
//2. accepts currentState, action, returns new state
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value
      };
    case "decrement":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value
      };
    case "incrementTwo":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value
      };
    case "decrementTwo":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value
      };
    case "reset":
      return intialState;
    default:
      return currentState;
  }
};
export default function CounterTwo() {
  //1. accepts reducer, intialState, returns [newState,dispatch]
  const [newState, dispatch] = useReducer(reducer, intialState);
  return (
    <>
      <h1>Counter One value - {newState.firstCounter}</h1>
      <h1>Counter Two value - {newState.secondCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement 1
      </button>
      <button onClick={() => dispatch({ type: "incrementTwo", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrementTwo", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}
