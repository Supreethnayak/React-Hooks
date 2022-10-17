// [] to render only once
import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const showMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", showMousePosition);
  }, []);
  return (
    <div className="App">
      <p>X{x}</p>
      <p>Y{y}</p>
    </div>
  );
}
