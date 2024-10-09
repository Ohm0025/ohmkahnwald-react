import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import { useEffect } from "react";
import useHomeLayout from "./homelayout.hook";

const HomeLayout = () => {
  const { fetchUserData, cookies, fetchCookies } = useHomeLayout();

  useEffect(() => {
    fetchCookies();
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [cookies]);

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
