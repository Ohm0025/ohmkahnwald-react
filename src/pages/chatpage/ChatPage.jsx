import React, { useState } from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Input,
  Avatar,
  IconButton,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { Send } from "lucide-react";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([
    { id: 1, name: "John Doe", lastMessage: "Hey, how are you?", messages: [] },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "See you tomorrow!",
      messages: [],
    },
    {
      id: 3,
      name: "Bob Johnson",
      lastMessage: "Thanks for the help!",
      messages: [],
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim() && selectedChat) {
      const newMessage = { id: Date.now(), text: message, sender: "me" };
      setChats(
        chats.map((chat) =>
          chat.id === selectedChat.id
            ? {
                ...chat,
                messages: [...chat.messages, newMessage],
                lastMessage: message,
              }
            : chat
        )
      );
      setMessage("");
    }
  };

  const bgColor = useColorModeValue("gray.100", "gray.700");
  const hoverColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Flex h="100vh" maxW="1200px" mx="auto">
      {/* Conversation List */}
      <Box w="300px" borderRight="1px" borderColor="gray.200" p={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Chats
        </Text>
        <VStack align="stretch" spacing={2}>
          {chats.map((chat) => (
            <Box
              key={chat.id}
              p={2}
              borderradius="md"
              cursor="pointer"
              bg={selectedChat?.id === chat.id ? bgColor : "transparent"}
              _hover={{ bg: hoverColor }}
              onClick={() => setSelectedChat(chat)}
            >
              <HStack spacing={3}>
                <Avatar name={chat.name} size="sm" />
                <Box>
                  <Text fontWeight="bold">{chat.name}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {chat.lastMessage}
                  </Text>
                </Box>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Chat Window */}
      <Box flex={1} p={4}>
        {selectedChat ? (
          <VStack h="100%" justify="space-between">
            <Box w="100%">
              <HStack mb={4}>
                <Avatar name={selectedChat.name} size="sm" />
                <Text fontWeight="bold">{selectedChat.name}</Text>
              </HStack>
              <Divider mb={4} />
              <VStack
                align="stretch"
                spacing={4}
                maxH="calc(100vh - 200px)"
                overflowY="auto"
              >
                {selectedChat.messages.map((msg) => (
                  <Box
                    key={msg.id}
                    alignSelf={msg.sender === "me" ? "flex-end" : "flex-start"}
                    bg={msg.sender === "me" ? "blue.500" : bgColor}
                    color={msg.sender === "me" ? "white" : "black"}
                    borderradius="lg"
                    p={2}
                    maxW="70%"
                  >
                    <Text>{msg.text}</Text>
                  </Box>
                ))}
              </VStack>
            </Box>
            <HStack w="100%">
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <IconButton
                icon={<Send />}
                onClick={handleSendMessage}
                aria-label="Send message"
              />
            </HStack>
          </VStack>
        ) : (
          <Text>Select a chat to start messaging</Text>
        )}
      </Box>
    </Flex>
  );
};

export default ChatPage;
