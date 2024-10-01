import { Box, Image, Text } from "@chakra-ui/react";

const PostContent = ({ content }) => (
  <Box mb={12}>
    <Image src="/api/placeholder/1200/600" alt="Blog post main image" mb={8} />
    <Text fontSize="lg" lineHeight="tall">
      {content}
    </Text>
  </Box>
);

export default PostContent;
