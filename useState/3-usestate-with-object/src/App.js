import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState({
    firstName: "",
    lastName: ""
  });
  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <p>First Name: {name.firstName} </p>
        <p>Last Name: {name.lastName}</p>
        {/* <p>{JSON.stringify(name)}</p> */}
        {/* use Spread operator to make manual merge */}
      </form>
    </div>
  );
}
