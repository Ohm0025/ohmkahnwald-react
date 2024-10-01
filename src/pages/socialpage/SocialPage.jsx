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
} from "@chakra-ui/react";
import { Heart, MessageCircle, Share } from "lucide-react";

const SocialPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const toast = useToast();

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
        <Heading as="h1" size="xl" textAlign="center">
          Social Feed
        </Heading>

        {/* Post creation form */}
        <Box borderWidth={1} borderRadius="lg" p={4}>
          <Textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind?"
            resize="vertical"
          />
          <Button mt={2} colorScheme="blue" onClick={handlePostSubmit}>
            Post
          </Button>
        </Box>

        {/* Posts feed */}
        <VStack spacing={4} align="stretch">
          {posts.map((post) => (
            <Box key={post.id} borderWidth={1} borderRadius="lg" p={4}>
              <HStack spacing={4} mb={2}>
                <Avatar name={post.author} src="https://bit.ly/broken-link" />
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
