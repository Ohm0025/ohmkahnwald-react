import {
  Box,
  Container,
  VStack,
  HStack,
  Avatar,
  Button,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import ProfileHeader from "../../components/ProfileHeader";
import PostList from "../../components/PostList";
import useUserPage from "./userpage.hook";
import { useEffect } from "react";

const UserProfilePage = () => {
  const {
    user,
    isEditing,
    setIsEditing,
    postsPerPage,
    totalPages,
    handleSaveProfile,
    handleEditProfile,
    savedPosts,
    currentPage,
    setCurrentPage,
    fetchUserPosts,
    userPosts,
  } = useUserPage();

  useEffect(() => {
    fetchUserPosts();
  }, [user]);

  return (
    <Box>
      <Container maxW="container.xl" py={12}>
        <VStack spacing={12} align="stretch">
          {isEditing ? (
            <VStack spacing={4} align="stretch">
              <HStack>
                <Avatar size="2xl" name={user.username} src={user.avatar} />
                <Button>Change Picture</Button>
              </HStack>
              <Input
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <HStack width={"100%"}>
                <Button onClick={handleSaveProfile} width={"100%"}>
                  Save Changes
                </Button>
                <Button width={"100%"} onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </HStack>
            </VStack>
          ) : (
            <ProfileHeader user={user} onEditProfile={handleEditProfile} />
          )}
          <Tabs>
            <TabList>
              <Tab>My Posts</Tab>
              <Tab>Saved Posts</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {!userPosts ? (
                  <Box>Fetching Post...</Box>
                ) : userPosts.length > 0 ? (
                  <PostList
                    posts={userPosts.slice(
                      (currentPage - 1) * postsPerPage,
                      currentPage * postsPerPage
                    )}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                  />
                ) : (
                  <Box>Empthy Posts</Box>
                )}
              </TabPanel>
              <TabPanel>
                <PostList
                  posts={savedPosts.slice(
                    (currentPage - 1) * postsPerPage,
                    currentPage * postsPerPage
                  )}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Container>
    </Box>
  );
};

export default UserProfilePage;
