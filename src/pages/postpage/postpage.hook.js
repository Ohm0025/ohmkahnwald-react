import { useParams } from "react-router-dom";
import { getCurrentPost } from "../../api/postBlog.api";
import useCurrentPost from "../../stores/currentPost";
import useLoading from "../../stores/loading";

const usePostPage = () => {
  const { postBlogId } = useParams();
  const { isLoading, startLoading, stopLoading } = useLoading();
  const { currentPostBlogId, setCurrentPost } = useCurrentPost();
  const fetchCurrentPost = async () => {
    try {
      startLoading();
      const data = await getCurrentPost(postBlogId);
      setCurrentPost(data.post);
    } catch (err) {
      console.error(err);
    } finally {
      stopLoading();
    }
  };

  return {
    fetchCurrentPost,
    currentPostBlogId,
    isLoading,
  };
};

export default usePostPage;
