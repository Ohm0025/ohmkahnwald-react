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
import { io } from "socket.io-client";
import ChatBoard from "./ChatBoard";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const [socket, setSocket] = useState(io(import.meta.env.VITE_API_CHAT));

  const { user, chats, handleSendMessage } = useChatPage(socket);

  useEffect(() => {
    if (!user || !user.username) {
      window.open("/", "_self");
      return;
    } else {
      if (socket) {
        socket.on("connection", (socketId) => {
          console.log("connect to server : " + socketId);
        });

        socket.on("disconnect", () => {
          console.log("disconnect from server");
        });
        return () => socket.close();
      }
    }
  }, [user, socket]);

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
              socket={socket}
            />
          );
        })}
      </VStack>
      <Divider orientation="vertical" />
      <ChatBoard socket={socket} handleSendMessage={handleSendMessage} />
    </Box>
  );
};

export default ChatPage;
