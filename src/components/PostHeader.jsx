import { VStack, Heading, HStack, Avatar, Text, Image } from "@chakra-ui/react";
import { formatDateIntl } from "../utils/formatDate";

const PostHeader = ({ title, author, date, thumbnail }) => {
  const formatDate = formatDateIntl(new Date(date));

  return (
    <VStack spacing={4} align="stretch" mb={8}>
      <Heading as="h1" size="2xl" mb={5}>
        {title}
      </Heading>
      <Image
        src={thumbnail}
        alt="Description of the image"
        maxH="500px"
        objectFit="cover"
      />
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
