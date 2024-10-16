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
import imageDefault from "@/assets/blogDefault.png";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  console.log(post);
  return (
    <Card maxW={"full"}>
      <CardBody p={0}>
        <Image
          src={post.image || imageDefault}
          alt={post.title}
          borderTopLeftRadius={"lg"}
          borderTopRightRadius={"lg"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" textAlign={"center"}>
            {post.title}
          </Heading>
          <Text>{post.excerpt}</Text>
          <Text
            paddingRight={"1rem"}
            paddingBottom={"0.5rem"}
            color="blue.600"
            fontSize="xl"
            textAlign={"right"}
          >
            {post.likes ?? 0} likes
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <ButtonGroup
        spacing="2"
        p={4}
        borderBottomRightRadius={"lg"}
        borderBottomLeftRadius={"lg"}
        justifyContent={"center"}
      >
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={() => navigate("/post/" + post.postBlogId)}
        >
          View
        </Button>
        <Button variant="ghost" colorScheme="blue">
          Edit
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default PostCard;
