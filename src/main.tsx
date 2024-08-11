import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ClockApp from "./ClockApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClockApp />
  </StrictMode>
);
