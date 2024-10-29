import { useNavigate } from "react-router-dom";
import { verifyEmail } from "../../api/user.api";
import useLoginSuccessHook from "../../utils/handleSuccess.hook";
import useLoading from "../../stores/loading";
import useRegisterErrorHook from "../../utils/handleError.hook";

const useVerifyPage = () => {
  const { showSuccess } = useLoginSuccessHook();
  const { showToast } = useRegisterErrorHook();
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();
  const submitCode = async (code) => {
    try {
      startLoading();
      const data = await verifyEmail(code);
      if (data) {
        showSuccess(data.message);
        navigate("/login");
      }
    } catch (err) {
      showToast(err);
    } finally {
      stopLoading();
    }
  };
  return {
    submitCode,
  };
};

export default useVerifyPage;
