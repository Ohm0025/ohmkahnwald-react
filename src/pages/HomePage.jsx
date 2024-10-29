import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturePosts";
import { Box } from "@chakra-ui/react";
import Advertisement from "../components/advertisement/Advertisement";

const HomePage = () => {
  return (
    <Box>
      <Hero />
      <Advertisement slot={"4014328908"} />
      <FeaturedPosts />
    </Box>
  );
};

export default HomePage;
