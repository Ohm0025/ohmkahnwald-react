import { useState } from "react";
import { register } from "../../api/user.api";
import useLoading from "../../stores/loading";
import useRegisterErrorHook from "../../utils/handleError.hook";
import { useNavigate } from "react-router-dom";
import useLoginSuccessHook from "../../utils/handleSuccess.hook";

const useRegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { startLoading, stopLoading } = useLoading();
  const { showToast } = useRegisterErrorHook();
  const { showSuccess } = useLoginSuccessHook();
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (validateForm()) {
        startLoading("Registation Inprogress , Please wait...");
        const data = await register({ username, email, password });
        if (data.message) {
          showSuccess(data.message, data.des);
          navigate("/verify-page");
        }
      }
    } catch (err) {
      showToast(err, (errObj) => setErrors(errObj));
    } finally {
      stopLoading();
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
    navigate,
  };
};

export default useRegisterPage;
