import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../api/user.api";
import useLoading from "../stores/loading";
import {
  getExpiredTime,
  getStoredUserData,
  saveStoredUserData,
} from "../utils/cacheHandle";
import useRegisterErrorHook from "../utils/handleError.hook";

const UserContext = createContext();

export const useUser = function () {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default function UserProvider({ children }) {
  const [user, setUser] = useState(() => getStoredUserData());
  const { showToast } = useRegisterErrorHook();

  const fetchUserData = async () => {
    try {
      if (user) {
        return;
      }

      const data = await getUser();
      setUser(() => {
        return { ...data.user };
      });

      if (user) {
        saveStoredUserData(user);

        return;
      }
      saveStoredUserData({});
      return;
    } catch (err) {
      showToast(err);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
}
