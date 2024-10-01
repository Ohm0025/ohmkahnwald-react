import {
  Button,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";

const PostCard = ({ post }) => (
  <Card maxW="sm">
    <CardBody>
      <Image src={post.image} alt={post.title} borderRadius="lg" />
      <Stack mt="6" spacing="3">
        <Heading size="md">{post.title}</Heading>
        <Text>{post.excerpt}</Text>
        <Text color="blue.600" fontSize="2xl">
          {post.likes} likes
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <ButtonGroup spacing="2" p={4}>
      <Button variant="solid" colorScheme="blue">
        View
      </Button>
      <Button variant="ghost" colorScheme="blue">
        Edit
      </Button>
    </ButtonGroup>
  </Card>
);

export default PostCard;
