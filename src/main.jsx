import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import AcercaDe from "./pages/AcercaDe"
import Contacto from "./pages/Contacto"

import "../src/styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Contacto />
  </StrictMode>
);
