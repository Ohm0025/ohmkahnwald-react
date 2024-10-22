import {
  Box,
  Container,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg={useColorModeValue("gray.100", "gray.900")} py={8}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
        >
          <Text>&copy; 2024 OHMKAHNWALD . All rights reserved.</Text>
          <Stack direction="row" spacing={4} mt={{ base: 4, md: 0 }}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
export default Footer;
