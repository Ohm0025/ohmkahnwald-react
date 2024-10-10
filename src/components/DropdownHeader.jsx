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
  HStack,
} from "@chakra-ui/react";
import { User, Settings, HelpCircle, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeaderDropdownMenu = ({ userName, userEmail }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const hoverColor = useColorModeValue("gray.100", "gray.700");
  const navigate = useNavigate();

  return (
    <Menu>
      <MenuButton as={Button} colorScheme={"none"} p={0}>
        <Avatar size="sm" name={userName} />
      </MenuButton>
      <MenuList bg={bgColor}>
        <VStack
          align="start"
          p={3}
          borderBottomWidth={1}
          borderColor="gray.200"
        >
          <HStack
            justifyContent={"space-between"}
            w={"100%"}
            alignItems={"center"}
          >
            <Text fontWeight="bold">{userName}</Text>
          </HStack>
          <Text fontSize="sm" color="gray.500">
            {userEmail}
          </Text>
        </VStack>
        <MenuItem
          icon={<User size={18} />}
          _hover={{ bg: hoverColor }}
          onClick={() => navigate("/profile")}
        >
          Profile
        </MenuItem>
        <MenuItem
          icon={<Settings size={18} />}
          _hover={{ bg: hoverColor }}
          onClick={() => navigate("/post-create")}
        >
          Create Blog
        </MenuItem>
        <MenuItem
          icon={<HelpCircle size={18} />}
          _hover={{ bg: hoverColor }}
          onClick={() => navigate("/social-page")}
        >
          New Feeds
        </MenuItem>
        <MenuItem
          icon={<HelpCircle size={18} />}
          _hover={{ bg: hoverColor }}
          onClick={() => navigate("/chat")}
        >
          Chat
        </MenuItem>
        <MenuItem icon={<HelpCircle size={18} />} _hover={{ bg: hoverColor }}>
          Friend
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
