import { Box, Button, Heading, Image, Text, WrapItem } from "@chakra-ui/react";

const FeaturedPost = ({ title, excerpt, imageUrl, postBlogId }) => (
  <WrapItem w={{ base: "100%", md: "45%", lg: "30%" }}>
    <Box borderWidth={1} borderradius="lg" overflow="hidden">
      <Image
        src={imageUrl}
        alt={title}
        w={"100%"}
        h={{ base: "240px", md: "auto" }}
        aspectRatio={1}
        objectFit="cover"
      />
      <Box p={6}>
        <Heading as="h3" size="md" mb={2}>
          {title}
        </Heading>
        {/* <Text>{excerpt}</Text> */}
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

export default FeaturedPost;
