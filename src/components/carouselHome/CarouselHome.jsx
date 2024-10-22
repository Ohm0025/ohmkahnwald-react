import useCarouselHome from "./carouselHome.hook";
import CarouselItem from "./CarouselItem";
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
  Spinner,
} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { htmlToPlainText } from "../../utils/formatText";

const CarouselHome = () => {
  const { posts, fetchPosts } = useCarouselHome();
  const [currentIndex, setCurrentIndex] = useState(0);
  const bgColor = useColorModeValue("gray.500", "gray.700");
  const arrowColor = useColorModeValue("gray.800", "white");

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  if (posts.length <= 0) {
    return (
      <Wrap
        width={"100%"}
        h={"500px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Spinner />
      </Wrap>
    );
  }
  return (
    <Wrap width={"100%"}>
      <Box position="relative" h="500px" overflow="hidden" bg={bgColor}>
        <Flex
          transition="all 0.5s"
          ml={`-${currentIndex * 100}%`}
          w={`${posts.length * 100}%`}
          h="full"
        >
          {posts.map((item, index) => (
            <Box key={index} w={`${100 / posts.length}%`} h="full">
              <CarouselItem
                title={item.title}
                excerpt={htmlToPlainText(item.content, 20)}
                imageUrl={item.thumbnail}
              />
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
