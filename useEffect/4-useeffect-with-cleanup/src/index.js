import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MouseContainer from "./MouseContainer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MouseContainer />
  </StrictMode>
);
