// Problem: creating mutiple counters - with sigle reducer function and multiple useReducers

import { useReducer } from "react";
const initialState = {
  counValue: 0
};
function CounterThree() {
  //2. accepts currentState, action, returns new state
  function reducer(currentState, action) {
    switch (action.type) {
      case "increment":
        return { counValue: currentState.counValue + action.value };
      case "decrement":
        return { counValue: currentState.counValue - action.value };
      case "reset":
        return initialState;
      default:
        return currentState;
    }
  }
  //1. accepts reducer, intialState, returns [newState,dispatch]
  const [newState, dispatch] = useReducer(reducer, initialState);
  const [newStateTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h1>Counter One value - {newState?.counValue}</h1>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
      <div>
        <h1>Counter Two value - {newStateTwo?.counValue}</h1>
        <button onClick={() => dispatchTwo({ type: "increment", value: 2 })}>
          increment
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: 2 })}>
          decrement
        </button>
        <button onClick={() => dispatchTwo({ type: "reset" })}>reset</button>
      </div>
    </>
  );
}
export default CounterThree;
