import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUser } from "../api/user.api";
import useUser from "../stores/user";
import Cookies from "js-cookie";

const useHomeLayout = () => {
  const [cookies, setCookies] = useState(null);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const fetchCookies = () => {
    const cookieName = import.meta.env.VITE_COOKIES;
    const cookieValue = Cookies.get(cookieName);
    if (cookieValue) setCookies(cookieValue);
  };

  const fetchUserData = async () => {
    try {
      if (!cookies) {
        return;
      }
      const userObj = await getUser();
      setUser(userObj.user);
      console.log(userObj);
    } catch (err) {
      console.error(err);
    }
  };
  return { fetchUserData, fetchCookies, cookies };
};

export default useHomeLayout;
