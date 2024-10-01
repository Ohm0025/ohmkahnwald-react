import { Box, Button, Heading, Image, Text, WrapItem } from "@chakra-ui/react";

const FeaturedPost = ({ title, excerpt, imageUrl }) => (
  <WrapItem w={{ base: "100%", md: "45%", lg: "30%" }}>
    <Box borderWidth={1} borderRadius="lg" overflow="hidden">
      <Image src={imageUrl} alt={title} />
      <Box p={6}>
        <Heading as="h3" size="md" mb={2}>
          {title}
        </Heading>
        <Text>{excerpt}</Text>
        <Button mt={4} colorScheme="blue" variant="outline">
          Read More
        </Button>
      </Box>
    </Box>
  </WrapItem>
);

export default FeaturedPost;
