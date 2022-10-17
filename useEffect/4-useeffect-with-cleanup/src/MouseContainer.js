import "./styles.css";
import React, { useState } from "react";
import App from "./App";

function MouseContainer() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <App />}
    </div>
  );
}

export default MouseContainer;
