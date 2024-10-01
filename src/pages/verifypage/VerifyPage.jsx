import React, { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  PinInput,
  PinInputField,
  HStack,
  Button,
  useToast,
} from "@chakra-ui/react";

const VerifyEmailPage = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const toast = useToast();

  const handleVerification = () => {
    // Here you would typically send the verification code to your backend
    // For this example, we'll just show a success toast
    if (verificationCode.length === 6) {
      toast({
        title: "Verification successful",
        description: "Your email has been verified.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Verification failed",
        description: "Please enter a valid 6-digit code.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleResendCode = () => {
    // Here you would typically trigger a resend of the verification code
    toast({
      title: "Code resent",
      description: "A new verification code has been sent to your email.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8} minH={"100vh"}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Verify Your Email
        </Heading>
        <Text textAlign="center">
          Please enter the 6-digit code sent to your registered email address.
        </Text>
        <HStack justifyContent="center">
          <PinInput
            otp
            size="lg"
            value={verificationCode}
            onChange={setVerificationCode}
          >
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        <Button colorScheme="blue" onClick={handleVerification}>
          Verify Email
        </Button>
        <Button variant="link" onClick={handleResendCode}>
          Resend Code
        </Button>
      </VStack>
    </Box>
  );
};

export default VerifyEmailPage;
