import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";
import ScormWrapper from "./ScormWrapper";
import LoadWrapper from "./LoadWrapper";

// Import SCORM scripts
// import "./lib/scorm-toolkit-esm/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScormWrapper>
      <LoadWrapper>
        <App />
      </LoadWrapper>
    </ScormWrapper>
  </StrictMode>
);
