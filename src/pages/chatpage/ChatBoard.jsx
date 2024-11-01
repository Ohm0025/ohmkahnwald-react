import { VStack, Flex, Text, HStack, Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ChatBoard = ({ oldChat, handleSendMessage }) => {
  const [inputMessage, setInputMessage] = useState("");

  return (
    <VStack minH={"100vh"} w={"100%"} px={4}>
      <Flex
        minH={"50vh"}
        w={"100%"}
        display={"flex"}
        flexDirection={"column"}
        overflowY={"auto"}
        gap={{ base: 3, sm: 2 }}
      >
        <Text
          backgroundColor={"aqua"}
          padding={"0.5rem 1rem"}
          borderRadius={"2xl"}
          alignSelf={"flex-end"}
        >
          {oldChat}
        </Text>
        <Text
          backgroundColor={"gray"}
          padding={"0.5rem 1rem"}
          borderRadius={"2xl"}
          alignSelf={"flex-start"}
        >
          {oldChat}
        </Text>
      </Flex>
      <HStack w={"100%"}>
        <Input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <Button onClick={() => handleSendMessage(inputMessage)}>Send</Button>
      </HStack>
    </VStack>
  );
};

export default ChatBoard;
