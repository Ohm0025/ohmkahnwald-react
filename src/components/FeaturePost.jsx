import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  WrapItem,
  useMediaQuery,
} from "@chakra-ui/react";
import { limitWordCount } from "../utils/formatText";
import { useEffect } from "react";

const FeaturedPost = ({ title, excerpt, imageUrl, postBlogId }) => {
  const [isLargerThan] = useMediaQuery("(min-width: 760px)");

  return (
    <WrapItem
      w={{ base: "100%", md: "45%", lg: "30%" }}
      minH={"100%"}
      justifyContent={"center"}
    >
      <Box
        borderWidth={1}
        borderradius="lg"
        overflow="hidden"
        minH={"100%"}
        display={"grid"}
        gridTemplateRows={"2fr"}
      >
        <Image
          src={imageUrl}
          alt={title}
          w={"100%"}
          h={{ base: "240px", md: "auto" }}
          aspectRatio={1}
          objectFit="cover"
        />
        <Box p={6}>
          <Heading as="h3" size="md" mb={2} title={title}>
            {limitWordCount(title, isLargerThan ? 50 : 60)}
          </Heading>

          <Button
            mt={4}
            colorScheme="blue"
            variant="outline"
            onClick={() => {
              window.open("/post/" + postBlogId, "_self");
            }}
          >
            Read More
          </Button>
        </Box>
      </Box>
    </WrapItem>
  );
};

export default FeaturedPost;
