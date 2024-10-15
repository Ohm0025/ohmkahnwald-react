import { getCurrentPost } from "../../api/postBlog.api";
import useCurrentPost from "../../stores/currentPost";

const usePostPage = () => {
  const { currentPostBlogId, setCurrentPost } = useCurrentPost();
  const fetchCurrentPost = async () => {
    try {
      const data = await getCurrentPost(currentPostBlogId);
      setCurrentPost(data.post);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    fetchCurrentPost,
    currentPostBlogId,
  };
};

export default usePostPage;
