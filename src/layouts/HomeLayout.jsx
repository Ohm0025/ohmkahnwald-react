import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

const HomeLayout = () => {
  return (
    <Box
      minW={"320px"}
      w={{ base: "100%", sm: "100%", md: "100%", lg: "720px" }}
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
