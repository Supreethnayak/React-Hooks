import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  function incrementCounter() {
    // setCount(count + 1);// use dependencylist [count]
    setCount((prevVal) => prevVal + 1); // dependencylist not required
  }
  useEffect(() => {
    const interval = setInterval(incrementCounter, 1000);

    return () => {
      // cleanup function
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="App">
      <p>{count}</p>
    </div>
  );
}
