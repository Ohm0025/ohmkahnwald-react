import useCarouselHome from "./carouselHome.hook";
import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  useColorModeValue,
  VStack,
  Heading,
  Wrap,
} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselItem = ({ title, excerpt, imageUrl }) => (
  <Box w="full" h="full">
    <Flex direction={{ base: "column", md: "row" }} h="full">
      <Image
        src={imageUrl}
        alt={title}
        objectFit="cover"
        w={{ base: "full", md: "50%" }}
        h={{ base: "200px", md: "full" }}
      />
      <VStack
        w={{ base: "full", md: "50%" }}
        h="full"
        p={8}
        spacing={4}
        align="flex-start"
        justify="center"
      >
        <Heading as="h2" size="xl">
          {title}
        </Heading>
        <Text fontSize="lg">{excerpt}</Text>
        <Button colorScheme="blue">Read More</Button>
      </VStack>
    </Flex>
  </Box>
);

const CarouselHome = () => {
  const { carouselItems } = useCarouselHome();
  const [currentIndex, setCurrentIndex] = useState(0);
  const bgColor = useColorModeValue("gray.500", "gray.700");
  const arrowColor = useColorModeValue("gray.800", "white");

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <Wrap width={"100%"}>
      <Box position="relative" h="500px" overflow="hidden" bg={bgColor}>
        <Flex
          transition="all 0.5s"
          ml={`-${currentIndex * 100}%`}
          w={`${carouselItems.length * 100}%`}
          h="full"
        >
          {carouselItems.map((item, index) => (
            <Box key={index} w={`${100 / carouselItems.length}%`} h="full">
              <CarouselItem {...item} />
            </Box>
          ))}
        </Flex>
        <Flex
          position="absolute"
          bottom={4}
          right={4}
          bg="blackAlpha.600"
          color="white"
          borderRadius="md"
        >
          <Button
            onClick={prevSlide}
            bg="transparent"
            _hover={{ bg: "blackAlpha.300" }}
          >
            <ChevronLeft boxSize={6} />
          </Button>
          <Button
            onClick={nextSlide}
            bg="transparent"
            _hover={{ bg: "blackAlpha.300" }}
          >
            <ChevronRight boxSize={6} />
          </Button>
        </Flex>
      </Box>
    </Wrap>
  );
};

export default CarouselHome;
