import { Box, Container, VStack } from "@chakra-ui/react";
import PostHeader from "../../components/PostHeader";
import PostContent from "../../components/PostContent";
import CommentSection from "../../components/CommentSection";
import { useEffect } from "react";
import usePostPage from "./postpage.hook";
import useCurrentPost from "../../stores/currentPost";

const PostPage = () => {
  const { currentPost, currentPostBlogId, isLoading } = useCurrentPost();
  const { fetchCurrentPost } = usePostPage();

  useEffect(() => {
    fetchCurrentPost();
  }, [currentPostBlogId]);

  if (!currentPost) {
    return <h1>Fetching Post</h1>;
  }

  return (
    <VStack width={"100%"} py={12} px={{ base: 5, lg: 1 }}>
      <PostHeader
        title={currentPost.title}
        author={currentPost.User?.username}
        thumbnail={currentPost.thumbnail}
        date={currentPost.createdAt}
        readTime={currentPost.readTime}
      />
      <PostContent content={currentPost.content} />
      {/* <CommentSection /> */}
    </VStack>
  );
};

export default PostPage;
