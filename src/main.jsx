import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";
// SCORM
import ScormWrapper from "./ScormWrapper";
import LoadWrapper from "./LoadWrapper";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScormWrapper>
      <LoadWrapper>
        <App />
      </LoadWrapper>
    </ScormWrapper>
  </StrictMode>
);
