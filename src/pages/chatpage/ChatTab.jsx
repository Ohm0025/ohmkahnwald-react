import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect } from "react";

const ChatTab = ({ imgProfile, username, lastDate, socket }) => {
  const [isLargerThan620] = useMediaQuery("(min-width: 620px)");

  const handleSelectTab = () => {
    if (socket) {
      socket.emit("join", username, "content");
    }
  };
  return (
    <Flex
      padding={1}
      alignItems={"center"}
      w={"100%"}
      gap={5}
      justifyContent={"center"}
      _hover={{
        backgroundColor: "red",
      }}
      onClick={() => handleSelectTab()}
    >
      <Image src={imgProfile} borderRadius={"50%"} w={"4.3rem"} />
      <Box
        w={"100%"}
        cursor={"pointer"}
        display={isLargerThan620 ? "block" : "none"}
      >
        <Text fontSize={"1.2rem"} fontWeight={"bold"}>
          {username}
        </Text>
        <Text wordBreak={"break-word"} fontSize={"0.9rem"} fontWeight={"400"}>
          {"jellijgoiregljydjyjyjytjytdjyt"}
        </Text>

        <Text textAlign={"end"} fontSize={"0.7rem"} fontWeight={"400"}>
          {lastDate}
        </Text>
      </Box>
    </Flex>
  );
};

export default ChatTab;
