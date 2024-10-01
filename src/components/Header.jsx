import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "lucide-react";
import HeaderDropdownMenu from "./DropdownHeader";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      bg={useColorModeValue("gray.100", "gray.900")}
      py={4}
      w={"100%"}
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">
            Blog Name
          </Heading>
          <Stack
            direction="row"
            spacing={4}
            alignItems={"center"}
            display={{ base: "none", md: "flex" }}
          >
            <Link href="/">Home</Link>
            <Link href="user">Profile</Link>
            <Link href="register">register</Link>
            <Link href="login">login</Link>
            <Link href="post-create">Post</Link>
            <IconButton
              onClick={toggleColorMode}
              variant={"ghost"}
              aria-label="Toggle color mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            />
          </Stack>
          <Box display={{ base: "block", md: "none" }}>
            <HeaderDropdownMenu
              userName={"JD"}
              userEmail={"egpejrgperj@hotmail.com"}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
