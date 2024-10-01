import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturePosts";
import { Box } from "@chakra-ui/react";

const HomePage = () => (
  <Box>
    <Hero />
    <FeaturedPosts />
  </Box>
);

export default HomePage;
