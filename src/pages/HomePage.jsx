import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturePosts";
import { Box } from "@chakra-ui/react";
import Advertisement from "../components/advertisement/Advertisement";

const HomePage = () => {
  return (
    <Box>
      <Hero />
      <Advertisement />
      <FeaturedPosts />
      <Advertisement />
    </Box>
  );
};

export default HomePage;
