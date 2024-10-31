import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Icon,
  VStack,
  Card,
  CardHeader,
  CardBody,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  User as FaUsers,
  MessageCircleMore as FaComments,
  Share2 as FaShareAlt,
  Heart as FaHeart,
} from "lucide-react";

const Feature = ({ title, text, icon }) => {
  return (
    <Card>
      <CardHeader>
        <Icon as={icon} w={8} h={8} color="blue.500" mb={4} />
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text color={useColorModeValue("gray.600", "gray.400")}>{text}</Text>
      </CardBody>
    </Card>
  );
};

const CommunityValue = ({ title, description, emoji }) => {
  return (
    <Stack direction="row" align="center" spacing={4}>
      <Text fontSize="2xl">{emoji}</Text>
      <Box>
        <Heading size="sm">{title}</Heading>
        <Text color={useColorModeValue("gray.600", "gray.400")}>
          {description}
        </Text>
      </Box>
    </Stack>
  );
};

const AboutPage = () => {
  const bgGradient = useColorModeValue(
    "linear(to-r, blue.50, purple.50)",
    "linear(to-r, blue.900, purple.900)"
  );

  return (
    <Container maxW="6xl" py={12}>
      {/* Hero Section */}
      <VStack spacing={4} textAlign="center" mb={12}>
        <Heading size="2xl">About Our Community Platform</Heading>
        <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.400")}>
          Connecting people through shared interests and meaningful
          conversations
        </Text>
      </VStack>

      {/* Mission Statement */}
      <Card mb={12} bgGradient={bgGradient}>
        <CardHeader>
          <Heading size="lg">Our Mission</Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize="lg">
            We believe in the power of community and shared experiences. Our
            platform provides a space where people can freely express their
            interests, share their knowledge, and connect with like-minded
            individuals from around the world.
          </Text>
        </CardBody>
      </Card>

      {/* Features Section */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={12}>
        <Feature
          icon={FaUsers}
          title="Connect with Others"
          text="Join a vibrant community of people who share your interests. Whether you're passionate about technology, arts, sports, or anything in between, you'll find your tribe here."
        />
        <Feature
          icon={FaComments}
          title="Share Your Thoughts"
          text="Create posts, start discussions, and engage in meaningful conversations. Our platform makes it easy to express yourself and contribute to the community."
        />
        <Feature
          icon={FaShareAlt}
          title="Knowledge Sharing"
          text="Share your expertise and learn from others. Our platform is built on the principle that everyone has something valuable to contribute."
        />
        <Feature
          icon={FaHeart}
          title="Safe and Welcoming"
          text="We're committed to maintaining a respectful and inclusive environment where everyone feels welcome to participate and share their perspectives."
        />
      </SimpleGrid>

      {/* Community Values */}
      <Card mb={12}>
        <CardHeader>
          <Heading size="lg">Our Community Values</Heading>
        </CardHeader>
        <CardBody>
          <Stack spacing={6}>
            <CommunityValue
              emoji="🤝"
              title="Respect"
              description="We foster an environment of mutual respect and understanding."
            />
            <CommunityValue
              emoji="💡"
              title="Innovation"
              description="We encourage creative thinking and new ideas."
            />
            <CommunityValue
              emoji="🌟"
              title="Authenticity"
              description="We value genuine connections and honest communication."
            />
            <CommunityValue
              emoji="🤲"
              title="Support"
              description="We believe in helping each other grow and succeed."
            />
          </Stack>
        </CardBody>
      </Card>

      {/* Join Us Section */}
      <Box
        textAlign="center"
        bg={useColorModeValue("gray.50", "gray.800")}
        p={8}
        borderRadius="lg"
      >
        <VStack spacing={4}>
          <Heading size="lg">Join Our Growing Community</Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.400")}>
            Be part of a platform where your voice matters and your interests
            are celebrated.
          </Text>
          <Text color={useColorModeValue("gray.500", "gray.500")}>
            Free to use • Easy to join • Open to everyone
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default AboutPage;
