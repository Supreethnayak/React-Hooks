import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const incremetfive = () => {
    for (let i = 0; i < 5; i++) {
      // setCount has access to previous count value
      setCount((prevCountVal) => prevCountVal + 1);
    }
  };
  return (
    <div className="App">
      <button onClick={() => setCount((prevCountVal) => prevCountVal + 1)}>
        +
      </button>
      <button onClick={() => setCount((prevCountVal) => prevCountVal - 1)}>
        -
      </button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={incremetfive}>+5</button>
      <p>{count}</p>
    </div>
  );
}
