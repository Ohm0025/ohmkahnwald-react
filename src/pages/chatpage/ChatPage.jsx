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
import ChatBoard from "./ChatBoard";
import { io } from "socket.io-client";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const { user, chats } = useChatPage();
  const [selectedUsername, setSelectedUsername] = useState("");
  const [currentSocket, setCurrentSocket] = useState(null);

  const [oldChat, setOldChat] = useState("");

  const handleSelectUsername = (username) => {
    setSelectedUsername(username);
    if (currentSocket) {
      currentSocket.emit("selectUserToChat", username);
    }
  };

  const handleSendMessage = (message) => {
    currentSocket.emit("sendMessage", message);
  };

  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_API_CHAT);
    setCurrentSocket(newSocket);
    if (!user || !user.username) {
      window.open("/", "_self");
      return;
    }
    newSocket.on("connect", () => {
      console.log("user connect");
    });
    newSocket.on("disconnect", () => {
      console.log("user disconnect");
    });
    newSocket.on("getOldMessages", (message) => {
      setOldChat(message);
    });

    return () => newSocket.close();
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
              handleSelectUsername={handleSelectUsername}
            />
          );
        })}
      </VStack>
      <Divider orientation="vertical" />
      <ChatBoard oldChat={oldChat} handleSendMessage={handleSendMessage} />
    </Box>
  );
};

export default ChatPage;
