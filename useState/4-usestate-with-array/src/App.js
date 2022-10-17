import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const addNewItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ]);
  };
  return (
    <div className="App">
      <button onClick={addNewItems}>Add</button>
      <ul>
        {items.map((ele) => {
          return <li key={ele.id}>{ele.value}</li>;
        })}
      </ul>
    </div>
  );
}
