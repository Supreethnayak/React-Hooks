// Problem: global state management
// (useReducer + useContext)

// File Structure
// A B C
//   D E
//     F

// useContext -> used to avoid Prop drilling
// Steps
// 1. create Context
// 2. Provider must Wrap child componet, Provide value
// 3. consume Value
import "./styles.css";
import { useReducer, createContext } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
export const counterContext = createContext();

// defining initialState and reducer function outside of component function
const initialState = {
  counterOne: 0
};
//2. accepts currentState, action, returns new state
function reducer(currentState, action) {
  switch (action.type) {
    case "increment":
      return { counterOne: currentState.counterOne + action.value };
    case "decrement":
      return { counterOne: currentState.counterOne - action.value };
    case "reset":
      return initialState;
    default:
      return currentState;
  }
}
export default function App() {
  //1. accepts reducer, intialState, returns [newState,dispatch]
  const [newState, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>count value - {newState.counterOne}</h1>
      <counterContext.Provider value={dispatch}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </counterContext.Provider>
    </>
  );
}
