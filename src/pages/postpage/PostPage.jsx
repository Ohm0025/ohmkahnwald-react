import { Box, Container, VStack, Wrap, Spinner } from "@chakra-ui/react";
import PostHeader from "../../components/PostHeader";
import PostContent from "../../components/PostContent";
import CommentSection from "../../components/CommentSection";
import { useEffect } from "react";
import usePostPage from "./postpage.hook";
import useCurrentPost from "../../stores/currentPost";
import Advertisement from "../../components/advertisement/Advertisement";

const PostPage = () => {
  const { currentPost, currentPostBlogId } = useCurrentPost();
  const { fetchCurrentPost } = usePostPage();

  useEffect(() => {
    fetchCurrentPost();
  }, [currentPostBlogId]);

  if (!currentPost) {
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
    <VStack width={"100%"} py={12} px={{ base: 5, lg: 1 }}>
      <PostHeader
        title={currentPost.title}
        author={currentPost.User?.username}
        thumbnail={currentPost.thumbnail}
        date={currentPost.createdAt}
        readTime={currentPost.readTime}
      />

      <PostContent content={currentPost.content} />
      <Advertisement slot={"4014328908"} />
      {/* <CommentSection /> */}
    </VStack>
  );
};

export default PostPage;
