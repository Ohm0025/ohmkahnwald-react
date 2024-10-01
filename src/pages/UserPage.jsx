import { useState } from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Avatar,
  Button,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Stack,
  Divider,
  ButtonGroup,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { EditIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import ProfileHeader from "../components/ProfileHeader";
import PostList from "../components/PostList";

const UserProfilePage = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "/api/placeholder/150/150",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const toast = useToast();

  // Mock data for user posts and saved posts
  const userPosts = Array(15)
    .fill()
    .map((_, i) => ({
      id: `post-${i + 1}`,
      title: `User Post ${i + 1}`,
      excerpt: "This is a short excerpt of the post content...",
      image: `/api/placeholder/400/300`,
      likes: Math.floor(Math.random() * 100),
    }));

  const savedPosts = Array(15)
    .fill()
    .map((_, i) => ({
      id: `saved-${i + 1}`,
      title: `Saved Post ${i + 1}`,
      excerpt: "This is a short excerpt of the saved post content...",
      image: `/api/placeholder/400/300`,
      likes: Math.floor(Math.random() * 100),
    }));

  const postsPerPage = 5;
  const totalPages = Math.ceil(userPosts.length / postsPerPage);

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

  return (
    <Box>
      <Container maxW="container.xl" py={12}>
        <VStack spacing={12} align="stretch">
          {isEditing ? (
            <VStack spacing={4} align="stretch">
              <HStack>
                <Avatar size="2xl" name={user.name} src={user.avatar} />
                <Button>Change Picture</Button>
              </HStack>
              <Input
                placeholder="Username"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <Button onClick={handleSaveProfile}>Save Changes</Button>
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
                <PostList
                  posts={userPosts.slice(
                    (currentPage - 1) * postsPerPage,
                    currentPage * postsPerPage
                  )}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                />
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
