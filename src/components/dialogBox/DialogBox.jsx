import React from "react";
import { Box, VStack, Text, Avatar, Flex } from "@chakra-ui/react";

const DialogBox = ({ message }) => {
  return (
    <Box
      maxW="100%"
      px={4}
      py={2}
      borderRadius="lg"
      border={"1px"}
      borderColor={"gray.500"}
    >
      <Text fontSize="md">{message}</Text>
    </Box>
  );
};

export default DialogBox;
