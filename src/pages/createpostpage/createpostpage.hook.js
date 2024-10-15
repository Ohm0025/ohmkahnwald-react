import { useState } from "react";
import { createPostBlog } from "../../api/postBlog.api";
import useLoginSuccessHook from "../../utils/handleSuccess.hook";
import useCurrentPost from "../../stores/currentPost";
import { useNavigate } from "react-router-dom";

const useCreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const { setCurrentPost, setCurrentPostBlogId } = useCurrentPost();
  const navigate = useNavigate();
  const { showSuccess } = useLoginSuccessHook();

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
    if (validateForm()) {
      const data = await createPostBlog({
        title,
        content,
        tags,
        thumbnail: image,
      });
      if (data.post) {
        showSuccess("Create Blog Success", "now your blog ready to read");
        setCurrentPost(data.post);
        setCurrentPostBlogId(data.post.postBlogId);
        navigate("/post");
      }
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
  };
};

export default useCreatePostPage;
