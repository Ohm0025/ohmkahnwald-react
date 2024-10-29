import { useEffect, useState } from "react";
import { useUser } from "../../contexts/userContext";
import { useToast } from "@chakra-ui/react";
import { getUserPosts } from "../../api/postBlog.api";
import {
  getUserPostsCache,
  setUserPostsCache,
  updateUserPostsCache,
  updateUserProfile,
} from "../../utils/cacheHandle";
import { updateUser } from "../../api/user.api";
import useRegisterErrorHook from "../../utils/handleError.hook";
import useLoginSuccessHook from "../../utils/handleSuccess.hook";
import useLoading from "../../stores/loading";

const useUserPage = () => {
  const { user, setUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPosts, setUserPosts] = useState(null);
  const { startLoading, stopLoading } = useLoading();
  const { showToast } = useRegisterErrorHook();
  const { showSuccess } = useLoginSuccessHook();

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
        } else {
          setUserPosts([]);
        }
      }
    } catch (err) {
      showToast(err);
    }
  };

  const postsPerPage = 6;
  const totalPages = 10;

  const savedPosts = [];

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = async () => {
    try {
      startLoading();
      const data = await updateUser(user);
      if (data) {
        updateUserProfile(user);
        showSuccess("Update Profile Success");
        setIsEditing(false);
      }
    } catch (err) {
      showToast(err);
    } finally {
      stopLoading();
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
