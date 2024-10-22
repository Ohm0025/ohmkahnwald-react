import { getCarouselPost } from "../../api/postBlog.api";
import useRegisterErrorHook from "../../utils/handleError.hook";
import { useState } from "react";

const useCarouselHome = () => {
  const [posts, setPosts] = useState([]);
  const { showToast } = useRegisterErrorHook();

  const fetchPosts = async () => {
    try {
      const data = await getCarouselPost();
      if (data.posts) {
        setPosts(() => {
          return [...data.posts];
        });
      }
    } catch (err) {
      showToast(err.message);
    }
  };
  return {
    posts,
    fetchPosts,
  };
};

export default useCarouselHome;
