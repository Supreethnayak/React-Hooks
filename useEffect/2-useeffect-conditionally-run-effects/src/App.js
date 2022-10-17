// Conditionally  run useEffect to reduce perfomance issues
import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div className="App">
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount((prevVal) => prevVal + 1)}>
        {count}
      </button>
      <p>{name}</p>
    </div>
  );
}
