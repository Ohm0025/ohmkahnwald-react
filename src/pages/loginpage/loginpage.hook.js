import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const useLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!email.match(emailPattern)) {
      newErrors.email = "Invalid Email Address";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the login request to your backend
      console.log("Login attempt:", { email, password, rememberMe });
      toast({
        title: "Login successful",
        description: "You've been logged in.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    rememberMe,
    setRememberMe,
    errors,
  };
};

export default useLoginPage;
