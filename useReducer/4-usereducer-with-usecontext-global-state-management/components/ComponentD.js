import { useContext } from "react";
import { counterContext } from "../App";
export default function ComponentD() {
  const dispatch = useContext(counterContext);

  return (
    <>
      <h1>From component D</h1>
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
