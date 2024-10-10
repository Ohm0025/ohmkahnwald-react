import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturePosts";
import { Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box>
      <Hero />
      <FeaturedPosts />
    </Box>
  );
};

export default HomePage;
