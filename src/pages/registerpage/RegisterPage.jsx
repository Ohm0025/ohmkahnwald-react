import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  InputRightElement,
  VStack,
  Text,
  useColorModeValue,
  InputGroup,
} from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import useRegisterPage from "./registerpage.hook";
import { useState } from "react";

const RegisterPage = () => {
  const {
    handleSubmit,
    errors,
    username,
    setUsername,
    password,
    setPassword,
    confirmPass,
    setConfirmPass,
    email,
    setEmail,
    navigate,
  } = useRegisterPage();

  const [showPass, setShowPass] = useState(false);

  return (
    <Box
      minHeight="100vh"
      backgroundColor={useColorModeValue("white", "gray.900")}
    >
      <Container maxW="container.md" py={12}>
        <VStack
          spacing={8}
          align="stretch"
          backgroundColor={useColorModeValue("white", "gray.900")}
          p={8}
          borderradius="md"
          boxShadow="md"
        >
          <Heading as="h1" size="xl" textAlign="center">
            Create an Account
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={!!errors.username}>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter a username (5-20 characters)"
                  borderColor={errors.username ? "red.500" : "inherit"}
                />
                <FormErrorMessage>{errors.username}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  borderColor={errors.email ? "red.500" : "inherit"}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter a password"
                    borderColor={errors.password ? "red.500" : "inherit"}
                  />
                  <InputRightElement width={"3rem"}>
                    <Button
                      h="1rem"
                      background={"none"}
                      size="sm"
                      p={0}
                      _hover={{ background: "none" }}
                      onClick={() => setShowPass(!showPass)}
                    >
                      {showPass ? <EyeOff /> : <Eye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.confirmPass}>
                <FormLabel htmlFor="confirmPass">Confirmed Password</FormLabel>
                <Input
                  id="confirmPass"
                  type="password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  placeholder="Confirm Password"
                  borderColor={errors.confirmPass ? "red.500" : "inherit"}
                />
                <FormErrorMessage>{errors.confirmPass}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full" mt={4}>
                Sign Up
              </Button>
            </VStack>
          </form>
          <Text textAlign="center">
            Already have an account?{" "}
            <Button
              variant="link"
              colorScheme="blue"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default RegisterPage;
