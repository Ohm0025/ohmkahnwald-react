import {
  HStack,
  Avatar,
  VStack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { EditIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const ProfileHeader = ({ user, onEditProfile }) => (
  <HStack
    spacing={8}
    align="center"
    w="full"
    flexDirection={{ base: "column", sm: "row" }}
  >
    <Avatar size="2xl" name={user.username} src={user.avatar} />
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

export default ProfileHeader;
