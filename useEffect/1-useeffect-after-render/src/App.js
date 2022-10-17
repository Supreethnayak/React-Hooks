// useEffect hook is called on every single render
// unless you specify dependency array
import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div className="App">
      <button onClick={() => setCount((prevVal) => prevVal + 1)}>
        {count}
      </button>
    </div>
  );
}
