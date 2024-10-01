import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  Text,
  VStack,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDown, User, Settings, HelpCircle, LogOut } from "lucide-react";

const HeaderDropdownMenu = ({ userName, userEmail }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const hoverColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown />} variant="ghost">
        <Avatar
          size="sm"
          name={userName}
          src="https://bit.ly/broken-link"
          mr={2}
        />
        <Text display={{ base: "none", md: "inline" }}>{userName}</Text>
      </MenuButton>
      <MenuList bg={bgColor}>
        <VStack
          align="start"
          p={3}
          borderBottomWidth={1}
          borderColor="gray.200"
        >
          <Text fontWeight="bold">{userName}</Text>
          <Text fontSize="sm" color="gray.500">
            {userEmail}
          </Text>
        </VStack>
        <MenuItem icon={<User size={18} />} _hover={{ bg: hoverColor }}>
          Profile
        </MenuItem>
        <MenuItem icon={<Settings size={18} />} _hover={{ bg: hoverColor }}>
          Settings
        </MenuItem>
        <MenuItem icon={<HelpCircle size={18} />} _hover={{ bg: hoverColor }}>
          Help & Support
        </MenuItem>
        <Divider />
        <MenuItem icon={<LogOut size={18} />} _hover={{ bg: hoverColor }}>
          Log Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HeaderDropdownMenu;
