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
import { useUser } from "../contexts/userContext";
import { useEffect } from "react";
import useRegisterErrorHook from "../utils/handleError.hook";
import { getExpiredTime, getStoredUserData } from "../utils/cacheHandle";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { user, setUser } = useUser();
  const { showToast } = useRegisterErrorHook();

  useEffect(() => {
    const expirationTime = getExpiredTime();
    if (user && new Date().getTime() > parseInt(expirationTime)) {
      showToast("Session Time Out");
      setUser(() => getStoredUserData());
      navigate("/");
    }
    if (user && !getStoredUserData()) {
      showToast("Session Time Out");
      setUser(() => getStoredUserData());
      navigate("/");
    }
  }, [user]);

  return (
    <Box
      as="header"
      bg={useColorModeValue("gray.100", "gray.900")}
      py={4}
      w={"100%"}
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Link href="/">
            <Heading as="h1" size={{ base: "sm", sm: "lg" }}>
              OHMKAHNWALD
            </Heading>
          </Link>
          <Stack direction="row" spacing={0} alignItems={"center"}>
            <Box>
              {user && user.isVerified ? (
                <HeaderDropdownMenu
                  userName={user.username}
                  userEmail={user.email}
                  imgProfile={user.imgProfile}
                />
              ) : (
                <Link href="/login">Sign in</Link>
              )}
            </Box>
            <IconButton
              onClick={toggleColorMode}
              variant={"ghost"}
              aria-label="Toggle color mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
