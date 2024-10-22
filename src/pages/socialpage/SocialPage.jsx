import React, { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Textarea,
  Button,
  Avatar,
  HStack,
  Divider,
  IconButton,
  useToast,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  CloseButton,
  Img,
} from "@chakra-ui/react";

import { Heart, MessageCircle, Share, Image } from "lucide-react";
import useSocialPage from "./socialpage.hook";

const SocialPage = () => {
  const [posts, setPosts] = useState([]);
  const toast = useToast();

  const {
    handleImageUpload,
    removeImage,
    handleSubmit,
    images,
    newPost,
    setNewPost,
  } = useSocialPage();

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const post = {
        id: Date.now(),
        content: newPost,
        author: "John Doe",
        timestamp: new Date().toLocaleString(),
        likes: 0,
        comments: 0,
        shares: 0,
      };
      setPosts([post, ...posts]);
      setNewPost("");
      toast({
        title: "Post created",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <Box maxWidth="600px" margin="auto" mt={8} p={4}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="lg" textAlign="center">
          Board Social
        </Heading>

        {/* Post creation form */}
        <Box borderWidth={1} borderradius="lg" p={4}>
          <Textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind?"
            resize="vertical"
          />
          {images.length > 0 && (
            <SimpleGrid columns={images.length > 1 ? 2 : 1} spacing={2}>
              {images.map((img, index) => (
                <Box key={index} position="relative">
                  <Img
                    src={img}
                    onClick={() => {}}
                    alt={`Upload preview ${index + 1}`}
                    borderradius="md"
                  />
                  <CloseButton
                    size="sm"
                    position="absolute"
                    top={1}
                    right={1}
                    onClick={() => removeImage(index)}
                  />
                </Box>
              ))}
            </SimpleGrid>
          )}
          <HStack>
            <FormControl w="auto">
              <FormLabel htmlFor="image-upload" mb="0">
                <IconButton
                  as="span"
                  aria-label="Upload images"
                  icon={<Image />}
                  variant="ghost"
                  cursor="pointer"
                />
              </FormLabel>
              <Input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                multiple
                display="none"
              />
            </FormControl>
            <Button mt={2} colorScheme="blue" onClick={handleSubmit}>
              Post
            </Button>
          </HStack>
        </Box>

        {/* Posts feed */}
        <VStack spacing={4} align="stretch">
          {posts.map((post) => (
            <Box key={post.id} borderWidth={1} borderradius="lg" p={4}>
              <HStack spacing={4} mb={2}>
                <Avatar name={post.author} src={""} />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">{post.author}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {post.timestamp}
                  </Text>
                </VStack>
              </HStack>
              <Text mb={4}>{post.content}</Text>
              <Divider mb={2} />
              <HStack justify="space-between">
                <IconButton
                  icon={<Heart />}
                  variant="ghost"
                  aria-label="Like"
                  onClick={() => handleLike(post.id)}
                />
                <IconButton
                  icon={<MessageCircle />}
                  variant="ghost"
                  aria-label="Comment"
                />
                <IconButton
                  icon={<Share />}
                  variant="ghost"
                  aria-label="Share"
                />
              </HStack>
              <HStack spacing={4} mt={2}>
                <Text fontSize="sm">{post.likes} likes</Text>
                <Text fontSize="sm">{post.comments} comments</Text>
                <Text fontSize="sm">{post.shares} shares</Text>
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default SocialPage;
