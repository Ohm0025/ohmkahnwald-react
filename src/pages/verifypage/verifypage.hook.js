import { verifyEmail } from "../../api/user.api";

const useVerifyPage = () => {
  const submitCode = async (code) => {
    try {
      const data = await verifyEmail(code);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  return {
    submitCode,
  };
};

export default useVerifyPage;
