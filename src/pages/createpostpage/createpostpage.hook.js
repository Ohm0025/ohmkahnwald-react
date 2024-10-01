import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const useCreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const toast = useToast();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the post data to your backend
      console.log("Post submitted:", { title, content, tags, image });
      toast({
        title: "Post created",
        description: "Your post has been successfully created.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
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
  };
};

export default useCreatePostPage;
