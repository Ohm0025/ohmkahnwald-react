import { Box, Container, Heading, Wrap } from "@chakra-ui/react";
import FeaturedPost from "./FeaturePost";
import useRegisterErrorHook from "../utils/handleError.hook";
import { getRecentPost } from "../api/postBlog.api";
import { useEffect, useState } from "react";

const FeaturedPosts = () => {
  const { showToast } = useRegisterErrorHook();
  const [recentPosts, setRecentPosts] = useState([]);
  const fetchRecentPost = async () => {
    try {
      const data = await getRecentPost();
      setRecentPosts(() => {
        return [...data.posts];
      });
    } catch (err) {
      showToast(err.message);
    }
  };

  useEffect(() => {
    fetchRecentPost();
  }, []);
  return (
    <Box py={16}>
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb={8}>
          Recent Posts
        </Heading>
        <Wrap spacing={8} justify="center">
          {recentPosts.map((item, index) => {
            return (
              <FeaturedPost
                key={"featured-" + index}
                title={item.title}
                imageUrl={item.thumbnail}
                postBlogId={item.postBlogId}
              />
            );
          })}
        </Wrap>
      </Container>
    </Box>
  );
};

export default FeaturedPosts;
