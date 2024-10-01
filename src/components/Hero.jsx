import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const Hero = () => (
  <Box bg="blue.500" color="white" py={16}>
    <Container maxW="container.xl">
      <VStack spacing={8} align="flex-start">
        <Heading as="h2" size="2xl">
          Welcome to Our Blog
        </Heading>
        <Text fontSize="xl">
          Discover insightful articles on various topics.
        </Text>
        <Button colorScheme="whiteAlpha">Read Latest Post</Button>
      </VStack>
    </Container>
  </Box>
);

export default Hero;
