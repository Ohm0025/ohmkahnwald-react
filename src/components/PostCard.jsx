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
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import imageDefault from "@/assets/blogDefault.png";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const aspectRatio = 16 / 9;
  return (
    <Card maxW={"full"}>
      <CardBody p={0}>
        <Box
          position="relative"
          width="100%"
          paddingBottom={`${(1 / aspectRatio) * 100}%`}
          overflow="hidden"
        >
          <Image
            src={post.thumbnail || imageDefault}
            alt={post.title}
            borderTopLeftRadius={"lg"}
            borderTopRightRadius={"lg"}
            fallbackSrc={imageDefault}
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
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
          onClick={() =>
            window.open("/post/" + post.postBlogId, "_blank").focus()
          }
        >
          View
        </Button>
        <Button
          variant="ghost"
          colorScheme="blue"
          onClick={() => {
            navigate("/post-edit/" + post.postBlogId);
          }}
        >
          Edit
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default PostCard;
