import mainRouter from "./router";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "react-quill/dist/quill.snow.css";
import { useUser } from "./contexts/userContext";
import { useEffect } from "react";

function App() {
  const { fetchUserData } = useUser();

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <ChakraProvider>
      <RouterProvider router={mainRouter}></RouterProvider>;
    </ChakraProvider>
  );
}

export default App;
