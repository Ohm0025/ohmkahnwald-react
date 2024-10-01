import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Avatar,
  Divider,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";

const CommentSection = () => (
  <VStack spacing={8} align="stretch">
    <Heading as="h3" size="lg">
      Comments
    </Heading>
    <VStack as="form" spacing={4} align="stretch">
      <Input placeholder="Your name" />
      <Textarea placeholder="Leave a comment" />
      <Button colorScheme="blue" alignSelf="flex-start">
        Post Comment
      </Button>
    </VStack>
    <Divider />
    <VStack spacing={4} align="stretch">
      <HStack align="start" spacing={4}>
        <Avatar name="John Doe" src="/api/placeholder/40/40" />
        <Box>
          <Text fontWeight="bold">John Doe</Text>
          <Text fontSize="sm" color="gray.500">
            2 days ago
          </Text>
          <Text mt={2}>
            This is a great article! I learned a lot from it. Thank you for
            sharing your insights.
          </Text>
        </Box>
      </HStack>
      <HStack align="start" spacing={4}>
        <Avatar name="Jane Smith" src="/api/placeholder/40/40" />
        <Box>
          <Text fontWeight="bold">Jane Smith</Text>
          <Text fontSize="sm" color="gray.500">
            1 day ago
          </Text>
          <Text mt={2}>
            I have a question about one of the points you made. Could you
            elaborate on...
          </Text>
        </Box>
      </HStack>
    </VStack>
  </VStack>
);

export default CommentSection;
