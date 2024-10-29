import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Container,
  Icon,
  useColorModeValue,
  Flex,
  keyframes,
} from "@chakra-ui/react";

// You can use these if you're using react-router-dom
// import { useNavigate } from 'react-router-dom';

// Create a floating animation
const floating = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-20px) }
  100% { transform: translateY(0px) }
`;

// Custom 404 Icon component
const NotFoundIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M100 0C44.7 0 0 44.7 0 100s44.7 100 100 100 100-44.7 100-100S155.3 0 100 0zm0 180c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm0-120c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm0 60c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z"
    />
  </Icon>
);

const NotFoundPage = () => {
  // const navigate = useNavigate(); // Uncomment if using react-router-dom
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const floatingAnimation = `${floating} 3s infinite ease-in-out`;

  const handleGoHome = () => {
    // If using react-router-dom:
    // navigate('/');

    // For now, just redirect to root
    window.location.href = "/";
  };

  return (
    <Box
      minH="100vh"
      bg={bgColor}
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={10}
    >
      <Container maxW="container.md">
        <VStack spacing={8} textAlign="center">
          {/* Animated 404 Icon */}
          <Flex animation={floatingAnimation} mb={8}>
            <NotFoundIcon
              w={40}
              h={40}
              color={useColorModeValue("blue.500", "blue.300")}
            />
          </Flex>

          {/* Main Heading */}
          <Heading
            fontSize={{ base: "6xl", md: "8xl" }}
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            404
          </Heading>

          {/* Sub Heading */}
          <Heading
            fontSize={{ base: "2xl", md: "3xl" }}
            color={useColorModeValue("gray.800", "white")}
            mb={2}
          >
            Page Not Found
          </Heading>

          {/* Description */}
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color={textColor}
            maxW="600px"
            mb={8}
          >
            Oops! The page you're looking for seems to have vanished into thin
            air. Don't worry, even the best explorers get lost sometimes.
          </Text>

          {/* Action Buttons */}
          <VStack spacing={4}>
            <Button
              colorScheme="blue"
              size="lg"
              onClick={handleGoHome}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.2s"
            >
              Return Home
            </Button>

            <Button
              variant="ghost"
              size="md"
              onClick={() => window.history.back()}
              color={textColor}
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
            >
              Go Back
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
