import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <Box
      minW={"300px"}
      w={{ base: "300px", sm: "520px", md: "720px", lg: "800px" }}
      margin={"auto"}
    >
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default HomeLayout;
