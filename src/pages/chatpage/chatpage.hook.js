import { useState } from "react";
import { useUser } from "../../contexts/userContext";

const useChatPage = () => {
  const { user } = useUser();
  const [chats, setChats] = useState([]);
  const handleSendMessage = () => {
    console.log("send message");
  };
  return {
    user,
    chats,
    handleSendMessage,
  };
};

export default useChatPage;
