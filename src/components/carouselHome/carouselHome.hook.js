import { getCarouselPost } from "../../api/postBlog.api";
import useRegisterErrorHook from "../../utils/handleError.hook";
import { useState } from "react";

const useCarouselHome = () => {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { showToast } = useRegisterErrorHook();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= 4 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? posts.length - 1 : prevIndex - 1
    );
  };

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
    nextSlide,
    prevSlide,
    currentIndex,
  };
};

export default useCarouselHome;
