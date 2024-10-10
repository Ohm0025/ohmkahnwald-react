import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ColorModeScript } from "@chakra-ui/react";
import UserProvider from "./contexts/userContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ColorModeScript initialColorMode="light" />
    <App />
  </UserProvider>
);
