import { Box, Container } from "@chakra-ui/react";
import PostHeader from "../components/PostHeader";
import PostContent from "../components/PostContent";
import CommentSection from "../components/CommentSection";

const samplePost = {
  title: "The Impact of Artificial Intelligence on Modern Society",
  author: "Alex Johnson",
  date: "April 15, 2024",
  readTime: "8",
  content: `
      Artificial Intelligence (AI) has become an integral part of our daily lives, influencing everything from how we work to how we interact with technology. This article explores the far-reaching implications of AI on modern society.

      First, let's consider the workplace. AI is revolutionizing industries across the board, from manufacturing to healthcare. Automation powered by AI is increasing efficiency and productivity, but it's also raising questions about the future of human employment. While some jobs may become obsolete, new roles are emerging that require skills in AI development and management.

      In the realm of personal technology, AI assistants like Siri, Alexa, and Google Assistant have become commonplace. These AI-powered tools are making our lives more convenient, helping us manage our schedules, control our smart homes, and access information instantly. However, they also raise concerns about privacy and data security.

      AI is also making significant strides in healthcare. Machine learning algorithms can analyze medical images with high accuracy, potentially detecting diseases earlier than human doctors. AI-powered robots are assisting in surgeries, and predictive analytics are helping to personalize treatment plans.

      Education is another area being transformed by AI. Adaptive learning systems can tailor educational content to individual students' needs, potentially revolutionizing how we approach learning and skill development.

      However, the rapid advancement of AI also brings challenges. There are ethical concerns about bias in AI systems, the potential for job displacement, and the need for regulations to ensure AI is developed and used responsibly.

      In conclusion, AI is reshaping our world in profound ways. As we continue to integrate AI into various aspects of our lives, it's crucial that we approach its development and implementation thoughtfully, considering both its immense potential and its possible pitfalls.
    `,
};

const PostPage = () => {
  return (
    <Box>
      <Container maxW="container.md" py={12}>
        <PostHeader
          title={samplePost.title}
          author={samplePost.author}
          date={samplePost.date}
          readTime={samplePost.readTime}
        />
        <PostContent content={samplePost.content} />
        <CommentSection />
      </Container>
    </Box>
  );
};

export default PostPage;
