import { useToast } from "@chakra-ui/react";

const useRegisterErrorHook = () => {
  const toast = useToast();
  const showToast = (err, cb) => {
    console.log(err);
    let des = "";
    let title = "";

    if (err.message?.toLowerCase() === "network error") {
      title = err.message;
      des = "server is busy , please try again later";
    } else if (
      err.message?.toLowerCase() === "request failed with status code 401"
    ) {
      title = err.response?.data?.message;
      des = err.response?.data?.des;
      if (title === "Email or Password is incorrect") {
        cb({
          email: "Email or Password is incorrect",
          password: "Email or Password is incorrect",
        });
      } else if (title.includes("already")) {
        if (title.includes("email")) {
          cb({
            email: title,
          });
        } else if (title.toLowerCase().includes("username")) {
          cb({
            username: title,
          });
        }
      }
    }

    return toast({
      title: title || "there's something wrong",
      description: des || "please try again later",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  return {
    showToast,
  };
};

export default useRegisterErrorHook;
