import { useParams } from "react-router-dom";
import { getCurrentPost } from "../../api/postBlog.api";
import useCurrentPost from "../../stores/currentPost";

const usePostPage = () => {
  const { postBlogId } = useParams();
  const { currentPostBlogId, setCurrentPost } = useCurrentPost();
  const fetchCurrentPost = async () => {
    try {
      const data = await getCurrentPost(postBlogId);
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
