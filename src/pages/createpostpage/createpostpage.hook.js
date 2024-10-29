import { useState } from "react";
import {
  createPostBlog,
  editPostBlog,
  getCurrentPost,
} from "../../api/postBlog.api";
import useLoginSuccessHook from "../../utils/handleSuccess.hook";
import useCurrentPost from "../../stores/currentPost";
import { useNavigate, useParams } from "react-router-dom";
import useLoading from "../../stores/loading";
import useRegisterErrorHook from "../../utils/handleError.hook";
import { updateUserPostsCache } from "../../utils/cacheHandle";

const useCreatePostPage = (edited) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");
  const [image, setImage] = useState(null);
  const [file_set, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const { setCurrentPost, setCurrentPostBlogId } = useCurrentPost();
  const navigate = useNavigate();
  const { showSuccess } = useLoginSuccessHook();
  const { startLoading, stopLoading } = useLoading();
  const { showToast } = useRegisterErrorHook();
  const { postBlogId } = useParams();

  const fetchOriginalPost = async () => {
    try {
      startLoading();
      const data = await getCurrentPost(postBlogId);
      if (data) {
        setTitle(data.post?.title);
        setContent(data.post?.content);
        setImage(data.post?.thumbnail);
      }
    } catch (err) {
      showToast(err.message);
    } finally {
      stopLoading();
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!content.trim()) {
      newErrors.content = "Content is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (validateForm()) {
        startLoading();
        if (edited) {
          data = await editPostBlog(
            {
              title,
              content,
              thumbnail: file_set || (edited ? image : file_set),
            },
            postBlogId
          );
        } else {
          data = await createPostBlog({
            title,
            content,
            tags,
            thumbnail: file_set,
          });
        }

        if (data.post) {
          showSuccess("Create Blog Success", "now your blog ready to read");
          setCurrentPost(data.post);
          setCurrentPostBlogId(data.post?.postBlogId);
          if (edited) {
            updateUserPostsCache(data.post);
          }
          window.open("/post/" + data.post?.postBlogId, "_self");
        }
      }
    } catch (err) {
      showToast(err.message);
    } finally {
      stopLoading();
    }
  };

  const handleAddTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(() => {
        return file;
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    image,
    handleImageUpload,
    handleRemoveTag,
    handleAddTag,
    handleSubmit,
    errors,
    tags,
    currentTag,
    setCurrentTag,
    setImage,
    fetchOriginalPost,
  };
};

export default useCreatePostPage;
