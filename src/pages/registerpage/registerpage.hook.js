import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const useRegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (username.length < 5 || username.length > 20) {
      newErrors.username = "Username must be between 5 and 20 characters";
    } else if (!username) {
      newErrors.username = "Username is required";
    }
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (!password) {
      newErrors.password = "Password is required";
    }
    if (!email.match(emailPattern)) {
      newErrors.email = "Invalid email address";
    } else if (!email) {
      newErrors.email = "Email is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted");
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return {
    handleSubmit,
    username,
    setUsername,
    password,
    setPassword,
    email,
    setEmail,
    errors,
    validateForm,
  };
};

export default useRegisterPage;
