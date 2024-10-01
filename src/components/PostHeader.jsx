import { VStack, Heading, HStack, Avatar, Text } from "@chakra-ui/react";

const PostHeader = ({ title, author, date, readTime }) => (
  <VStack spacing={4} align="stretch" mb={8}>
    <Heading as="h1" size="2xl">
      {title}
    </Heading>
    <HStack spacing={4}>
      <Avatar name={author} src="/api/placeholder/50/50" />
      <VStack align="start" spacing={0}>
        <Text fontWeight="bold">{author}</Text>
        <HStack>
          <Text color="gray.500">{date}</Text>
          <Text color="gray.500">·</Text>
          <Text color="gray.500">{readTime} min read</Text>
        </HStack>
      </VStack>
    </HStack>
  </VStack>
);

export default PostHeader;
