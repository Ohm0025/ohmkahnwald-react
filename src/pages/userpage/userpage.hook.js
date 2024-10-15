import { useEffect, useState } from "react";
import { useUser } from "../../contexts/userContext";
import { useToast } from "@chakra-ui/react";
import { getUserPosts } from "../../api/postBlog.api";
import { getUserPostsCache, setUserPostsCache } from "../../utils/cacheHandle";

const useUserPage = () => {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPosts, setUserPosts] = useState(getUserPostsCache());
  const toast = useToast();

  const fetchUserPosts = async () => {
    try {
      if (!userPosts) {
        const data = await getUserPosts();
        if (data.userPosts?.length > 0) {
          setUserPostsCache(data.userPosts);
          setUserPosts(data.userPosts);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const postsPerPage = 5;
  const totalPages = 10;

  const savedPosts = [];

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return {
    user,
    isEditing,
    setIsEditing,
    totalPages,
    handleSaveProfile,
    handleEditProfile,
    savedPosts,
    postsPerPage,
    currentPage,
    setCurrentPage,
    userPosts,
    fetchUserPosts,
  };
};

export default useUserPage;
