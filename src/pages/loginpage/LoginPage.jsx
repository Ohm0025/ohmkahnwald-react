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
  Checkbox,
  useColorModeValue,
} from "@chakra-ui/react";
import useLoginPage from "./loginpage.hook";

const LoginPage = () => {
  const {
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    errors,
    navigate,
  } = useLoginPage();

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
            Login to Your Account
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
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
                  placeholder="Enter your password"
                  borderColor={errors.password ? "red.500" : "inherit"}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <Checkbox
                  id="rememberMe"
                  isChecked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                >
                  Remember me
                </Checkbox>
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full" mt={4}>
                Log In
              </Button>
            </VStack>
          </form>
          <VStack spacing={4}>
            <Button variant="link" colorScheme="blue">
              Forgot password?
            </Button>
            <Text textAlign="center">
              Don't have an account?{" "}
              <Button
                variant="link"
                colorScheme="blue"
                onClick={() => navigate("/register")}
              >
                Sign up
              </Button>
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default LoginPage;
