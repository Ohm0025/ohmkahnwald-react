import { useToast } from "@chakra-ui/react";

const useLoginSuccessHook = () => {
  const toast = useToast();
  const showSuccess = (message, des) => {
    return toast({
      title: message || "Task Complete",
      description: des || "everything is fine",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return {
    showSuccess,
  };
};

export default useLoginSuccessHook;
