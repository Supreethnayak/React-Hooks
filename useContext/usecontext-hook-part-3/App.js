import "./styles.css";
import { createContext } from "react";
import ComponentC from "./components/ComponentC";
export const userInfoContext = createContext();
export const userRoleContext = createContext();
// simplify consuming value using useContext
// insted of importing and using contextName.Consumer
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
