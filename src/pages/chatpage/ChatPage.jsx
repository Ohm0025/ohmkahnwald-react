import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Button,
  Input,
  Avatar,
  IconButton,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { Send } from "lucide-react";
import useChatPage from "./chatpage.hook";
import ChatTab from "./ChatTab";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const { user, chats, handleSendMessage } = useChatPage();

  useEffect(() => {
    if (!user || !user.username) {
      window.open("/", "_self");
      return;
    }
  }, [user]);

  return (
    <Box display={"grid"} gridTemplateColumns={"1fr 0.01fr 2fr"}>
      <VStack minH={"100vh"}>
        {chats.map((item, index) => {
          return (
            <ChatTab
              key={"chatTab-" + index}
              username={item.username}
              imgProfile={item.imgProfile}
              lastDate={item.lastDate}
            />
          );
        })}
      </VStack>
      <Divider orientation="vertical" />
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
          <Input />
          <Button>Send</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ChatPage;
