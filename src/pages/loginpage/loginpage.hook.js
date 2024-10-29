import { useState } from "react";
import { login } from "../../api/user.api";
import useLoginSuccessHook from "../../utils/handleSuccess.hook";
import { useNavigate } from "react-router-dom";
import useLoading from "../../stores/loading";
import useRegisterErrorHook from "../../utils/handleError.hook";
import {
  removeLogin,
  saveStoredUserData,
  setLogin,
} from "../../utils/cacheHandle";
import { useUser } from "../../contexts/userContext";

const useLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const { showSuccess } = useLoginSuccessHook();
  const { showToast } = useRegisterErrorHook();
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();
  const { setUser } = useUser();

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
          if (rememberMe) {
            setLogin({ email, password });
          } else {
            removeLogin();
          }
          saveStoredUserData({
            username: data.username,
            email: data.email,
            isVerified: data.isVerified,
            bio: data.bio,
            imgProfile: data.imgProfile,
          });
          setUser(() => {
            return {
              username: data.username,
              email: data.email,
              isVerified: data.isVerified,
              bio: data.bio,
              imgProfile: data.imgProfile,
            };
          });
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
    showPass,
    setShowPass,
  };
};

export default useLoginPage;
