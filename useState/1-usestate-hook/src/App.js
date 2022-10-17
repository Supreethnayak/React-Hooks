import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <button onClick={incrementCounter}>count</button>
      <p>{count}</p>
    </div>
  );
}
