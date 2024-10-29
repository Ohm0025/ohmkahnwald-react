import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import { useEffect } from "react";
import SearchBar from "../components/searchBar/SearchBar";

const HomeLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(location);
  }, []);
  return (
    <Box
      minW={"320px"}
      w={{ base: "100%", sm: "100%", md: "100%", lg: "900px" }}
      margin={"auto"}
    >
      <Header />
      <>
        {location.pathname === "/chat" && <SearchBar />}
        <Outlet />
        <LoadingSpinner />
      </>
      <Footer />
    </Box>
  );
};

export default HomeLayout;
