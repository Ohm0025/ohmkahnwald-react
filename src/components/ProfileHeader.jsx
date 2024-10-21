import {
  HStack,
  Avatar,
  VStack,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import {
  EditIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Upload,
} from "lucide-react";

const ProfileHeader = ({ user, onEditProfile, isEdit }) => {
  return (
    <HStack
      spacing={8}
      align="center"
      w="full"
      flexDirection={{ base: "column", sm: "row" }}
    >
      <Box position={"relative"}>
        <Avatar size="2xl" name={user.username} src={user.avatar} />
        <Button
          borderRadius={"50%"}
          position={"absolute"}
          bottom={0}
          right={0}
          p={0}
          bg="rgba(255, 255, 255, 0.5)"
          backdropFilter="blur(10px)"
          _hover={{
            bg: "rgba(255, 255, 255, 0.8)",
          }}
        >
          {<Upload size={15} />}
        </Button>
      </Box>
      <VStack align="start" spacing={2}>
        <Heading as="h2" size="xl">
          {user.username}
        </Heading>
        <Text color="gray.500">{user.email}</Text>
        <Button leftIcon={<EditIcon />} onClick={onEditProfile}>
          Edit Profile
        </Button>
      </VStack>
    </HStack>
  );
};

export default ProfileHeader;
