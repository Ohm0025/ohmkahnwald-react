import {
  Box,
  Flex,
  Image,
  VStack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

const CarouselItem = ({ title, excerpt, imageUrl, postBlogId }) => (
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
        <Button
          colorScheme="blue"
          onClick={() => {
            window.open("/post/" + postBlogId, "_self");
          }}
        >
          Read More
        </Button>
      </VStack>
    </Flex>
  </Box>
);

export default CarouselItem;
