import { Box, Image, Text } from "@chakra-ui/react";
import { contentStyles } from "../utils/styleObj";
const PostContent = ({ content }) => (
  <Box
    className="blog-preview"
    dangerouslySetInnerHTML={{ __html: content }}
    sx={contentStyles}
  />
);

export default PostContent;
