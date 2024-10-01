import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import useRegisterPage from "./registerpage.hook";

const RegisterPage = () => {
  const {
    handleSubmit,
    errors,
    username,
    setUsername,
    password,
    setPassword,
    email,
    setEmail,
  } = useRegisterPage();

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
          borderRadius="md"
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
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter a password (min. 8 characters)"
                  borderColor={errors.password ? "red.500" : "inherit"}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full" mt={4}>
                Register
              </Button>
            </VStack>
          </form>
          <Text textAlign="center">
            Already have an account?{" "}
            <Button variant="link" colorScheme="blue">
              Log in
            </Button>
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default RegisterPage;
