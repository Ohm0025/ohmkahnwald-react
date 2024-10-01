import { Text, VStack, SimpleGrid, HStack, IconButton } from "@chakra-ui/react";
import { Edit, ChevronLeft, ChevronRight } from "lucide-react";
import PostCard from "./PostCard";

const PostList = ({ posts, currentPage, setCurrentPage, totalPages }) => (
  <VStack spacing={8} align="stretch">
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </SimpleGrid>
    <HStack justify="center">
      <IconButton
        icon={<ChevronLeft />}
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        isDisabled={currentPage === 1}
      />
      <Text>{`Page ${currentPage} of ${totalPages}`}</Text>
      <IconButton
        icon={<ChevronRight />}
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        isDisabled={currentPage === totalPages}
      />
    </HStack>
  </VStack>
);

export default PostList;
