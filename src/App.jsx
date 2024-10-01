import mainRouter from "./router";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "react-quill/dist/quill.snow.css";

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={mainRouter}></RouterProvider>;
    </ChakraProvider>
  );
}

export default App;
