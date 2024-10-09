import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  VStack,
  Textarea,
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
  useToast,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { X } from "lucide-react";
import useCreatePostPage from "./createpostpage.hook";
import PostEditor from "../../components/PostEditor";

const CreatePostPage = () => {
  const {
    handleSubmit,
    errors,
    title,
    setTitle,
    content,
    setContent,
    currentTag,
    setCurrentTag,
    handleAddTag,
    handleImageUpload,
    handleRemoveTag,
    tags,
    image,
  } = useCreatePostPage();

  return (
    <Box
      minHeight="100vh"
      backgroundColor={useColorModeValue("gray.50", "gray.900")}
    >
      <Container maxW="container.xl" py={12}>
        <VStack
          spacing={8}
          align="stretch"
          backgroundColor={useColorModeValue("gray.50", "gray.900")}
          p={8}
          borderradius="md"
          boxShadow="md"
        >
          <Heading as="h1" size="xl" textAlign="center">
            Create a New Blog
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={6} align="stretch">
              <FormControl isInvalid={!!errors.title}>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter blog title"
                  borderColor={errors.title ? "red.500" : "inherit"}
                />
                <FormErrorMessage>{errors.title}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.content}>
                <FormLabel htmlFor="content">Content</FormLabel>
                <Box
                  borderColor={errors.content ? "red.500" : "inherit"}
                  borderWidth={0}
                  borderradius="md"
                >
                  <PostEditor
                    content={content}
                    setContent={setContent}
                    placeholder="Write your blog content here"
                  />
                </Box>
                <FormErrorMessage>{errors.content}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="tags">Tags</FormLabel>
                <HStack>
                  <Input
                    id="tags"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    placeholder="Add tags"
                  />
                  <Button onClick={handleAddTag}>Add Tag</Button>
                </HStack>
                <HStack spacing={2} mt={2}>
                  {tags.map((tag, index) => (
                    <Tag
                      key={index}
                      size="md"
                      borderradius="full"
                      variant="solid"
                      colorScheme="blue"
                    >
                      <TagLabel>{tag}</TagLabel>
                      <TagCloseButton onClick={() => handleRemoveTag(tag)} />
                    </Tag>
                  ))}
                </HStack>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="image">Blog Thumbnail</FormLabel>
                <Input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  display="none"
                />
                <Button as="label" htmlFor="image" cursor="pointer">
                  Upload Image
                </Button>
                {image && (
                  <Box mt={4} position="relative">
                    <Image src={image} alt="Uploaded" maxH="200px" />
                    <Button
                      size="sm"
                      position="absolute"
                      top={2}
                      right={2}
                      onClick={() => setImage(null)}
                    >
                      <X size={16} />
                    </Button>
                  </Box>
                )}
              </FormControl>

              <Button type="submit" colorScheme="blue" size="lg" width="full">
                Publish Post
              </Button>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Box>
  );
};

export default CreatePostPage;
