import { useEffect, useState } from "react";
import { useUser } from "../../contexts/userContext";
import { useToast } from "@chakra-ui/react";
import { getUserPosts } from "../../api/postBlog.api";
import { getUserPostsCache, setUserPostsCache } from "../../utils/cacheHandle";
import { updateUser } from "../../api/user.api";

const useUserPage = () => {
  const { user, setUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPosts, setUserPosts] = useState(null);
  const toast = useToast();

  const fetchUserPosts = async () => {
    try {
      const getUser = getUserPostsCache();

      if (getUser) {
        setUserPosts(getUser);
      } else {
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

  const handleSaveProfile = async () => {
    try {
      const data = await updateUser(user);
      if (data) {
        console.log(data);
        setIsEditing(false);
      }
    } catch (err) {
      console.error(err);
    } finally {
    }
  };

  return {
    user,
    setUser,
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
