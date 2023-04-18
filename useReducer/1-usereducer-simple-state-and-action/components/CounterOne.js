// problem: creating counter - to increment,decrement and reset its value
import { useReducer } from "react";
const intialState = 0;
//2. accepts currentState, action, returns new state
const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return intialState;
    default:
      return currentState;
  }
};
export default function CounterOne() {
  //1. accepts reducer, intialState, returns [newState,dispatch]
  const [newState, dispatch] = useReducer(reducer, intialState);

  return (
    <>
      <h1>count value is - {newState}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
}
