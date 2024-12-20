import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import CarouselHome from "./carouselHome/CarouselHome";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Box bg="blue.500" color="white" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="flex-start">
          <CarouselHome />
          <Heading as="h2" size="2xl">
            Welcome to Our Blog
          </Heading>
          <Text fontSize="xl">
            Discover insightful articles on various topics.
          </Text>
          <Button colorScheme="whiteAlpha" onClick={() => navigate("/about")}>
            About Us
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
