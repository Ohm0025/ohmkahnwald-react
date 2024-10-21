import { VStack, Heading, HStack, Avatar, Text } from "@chakra-ui/react";
import { formatDateIntl } from "../utils/formatDate";

const PostHeader = ({ title, author, date, readTime }) => {
  const formatDate = formatDateIntl(new Date(date));
  return (
    <VStack spacing={4} align="stretch" mb={8}>
      <Heading as="h1" size="2xl" mb={5}>
        {title}
      </Heading>
      <HStack spacing={4}>
        <Avatar name={author} src="/api/placeholder/50/50" />
        <VStack align="start" spacing={0}>
          <Text fontWeight="bold">{author}</Text>
          <HStack>
            <Text color="gray.500">{formatDate}</Text>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};
export default PostHeader;
