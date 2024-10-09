import { useState } from "react";
import { login } from "../../api/user.api";
import useLoginSuccessHook from "../../utils/handleSuccess.hook";
import { useNavigate } from "react-router-dom";
import useLoading from "../../stores/loading";
import useRegisterErrorHook from "../../utils/handleError.hook";

const useLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const { showSuccess } = useLoginSuccessHook();
  const { showToast } = useRegisterErrorHook();
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();

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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (validateForm()) {
        startLoading("Login Inprogress , Please wait...");
        const data = await login(email, password);
        if (data.success) {
          showSuccess(data.message, data.des);
          navigate("/");
        }
      }
    } catch (err) {
      showToast(err, (errObj) => setErrors(errObj));
    } finally {
      stopLoading();
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
    navigate,
  };
};

export default useLoginPage;
