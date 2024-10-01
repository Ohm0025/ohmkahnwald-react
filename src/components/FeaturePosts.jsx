import { Box, Container, Heading, Wrap } from "@chakra-ui/react";
import FeaturedPost from "./FeaturePost";

const FeaturedPosts = () => (
  <Box py={16}>
    <Container maxW="container.xl">
      <Heading as="h2" size="xl" mb={8}>
        Featured Posts
      </Heading>
      <Wrap spacing={8} justify="center">
        <FeaturedPost
          title="10 Tips for Productive Writing"
          excerpt="Boost your writing productivity with these expert tips."
          imageUrl="/api/placeholder/800/400"
        />
        <FeaturedPost
          title="The Future of AI in Everyday Life"
          excerpt="Explore how AI is shaping our daily routines and future prospects."
          imageUrl="/api/placeholder/800/400"
        />
        <FeaturedPost
          title="Healthy Eating Habits for Busy Professionals"
          excerpt="Learn how to maintain a balanced diet despite a hectic schedule."
          imageUrl="/api/placeholder/800/400"
        />
      </Wrap>
    </Container>
  </Box>
);

export default FeaturedPosts;
