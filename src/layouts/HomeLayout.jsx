import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

const HomeLayout = () => {
  return (
    <Box
      minW={"320px"}
      w={{ base: "320px", sm: "480px", md: "600px", lg: "720px" }}
      margin={"auto"}
    >
      <Header />
      <>
        <Outlet />
        <LoadingSpinner />
      </>
      <Footer />
    </Box>
  );
};

export default HomeLayout;
