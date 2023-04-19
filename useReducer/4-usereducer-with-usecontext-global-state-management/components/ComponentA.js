import { useContext } from "react";
import { counterContext } from "../App";
export default function ComponentA() {
  const dispatch = useContext(counterContext);

  return (
    <>
      <h1>From component A</h1>
      <div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
    </>
  );
}
