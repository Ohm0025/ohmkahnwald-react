import { Box, Container } from "@chakra-ui/react";
import PostHeader from "../../components/PostHeader";
import PostContent from "../../components/PostContent";
import CommentSection from "../../components/CommentSection";
import { useEffect } from "react";
import usePostPage from "./postpage.hook";
import useCurrentPost from "../../stores/currentPost";

const PostPage = () => {
  const { currentPost, currentPostBlogId } = useCurrentPost();
  const { fetchCurrentPost } = usePostPage();

  useEffect(() => {
    fetchCurrentPost();
  }, [currentPostBlogId]);

  if (!currentPost) {
    return <h1>Post NOT FOUND</h1>;
  }

  return (
    <Box>
      <Container maxW="container.md" py={12}>
        <PostHeader
          title={currentPost.title}
          author={currentPost.User.username}
          date={currentPost.createdAt}
          readTime={currentPost.readTime}
        />
        <PostContent content={currentPost.content} />
        <CommentSection />
      </Container>
    </Box>
  );
};

export default PostPage;
