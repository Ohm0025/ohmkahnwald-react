import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ColorModeScript } from "@chakra-ui/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorModeScript initialColorMode="light" />
    <App />
  </StrictMode>
);
