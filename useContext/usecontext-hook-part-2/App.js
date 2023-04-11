import "./styles.css";
import React from "react";
import ComponentC from "./components/ComponentC";
export const userInfoContext = React.createContext();
export const userRoleContext = React.createContext();
// used to avoid Prop drilling

// Steps
// 1. create Context
// 2. Provider must Wrap child componet, Provide value
// 3. consume Value
export default function App() {
  return (
    <>
      <userInfoContext.Provider value={"Sup"}>
        <userRoleContext.Provider value={"Admin"}>
          <ComponentC />
        </userRoleContext.Provider>
      </userInfoContext.Provider>
    </>
  );
}
