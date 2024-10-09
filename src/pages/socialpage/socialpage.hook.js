import { useState } from "react";

const useSocialPage = () => {
  const [images, setImages] = useState([]);
  const [newPost, setNewPost] = useState("");
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      })
    ).then((results) => {
      setImages((prevImages) => [...prevImages, ...results]);
    });
  };
  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log("Posting:", { newPost, images });
    // Here you would typically send this data to your backend
    setNewPost("");
    setImages([]);
  };
  return {
    removeImage,
    handleSubmit,
    handleImageUpload,
    images,
    newPost,
    setNewPost,
  };
};

export default useSocialPage;
