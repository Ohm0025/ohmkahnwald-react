import { VStack, Flex, Text, HStack, Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ChatBoard = ({ socket, handleSendMessage }) => {
  const [inputMessage, setInputMessage] = useState("");
  useEffect(() => {
    if (socket) {
      socket.on("message", (message) => {
        console.log("message at socket on : " + message);
      });
      socket.on("loadMessage", (message) => {
        console.log("loadMessage at socket on : " + message);
      });
      socket.on("activeUsers", (users) => {
        console.log("active users at socket on : " + users);
      });
      socket.on("userJoined", (username) => {
        console.log("userJoined at socket on : " + username);
      });
      socket.on("userLeft", (username) => {
        console.log("user left at socket on : " + username);
      });
      return () => {
        socket.off("message");
        socket.off("loadMessage");
        socket.off("activeUsers");
        socket.off("userJoined");
        socket.off("userLeft");
      };
    }
  }, [socket]);

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
          girosejisgjoisrjgog;s
        </Text>
        <Text
          backgroundColor={"gray"}
          padding={"0.5rem 1rem"}
          borderRadius={"2xl"}
          alignSelf={"flex-start"}
        >
          girosejisgjoisrjgog;s
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
