import { createContext, useContext, useState } from "react";
import { getUser } from "../api/user.api";
import useLoading from "../stores/loading";
import { getStoredUserData, saveStoredUserData } from "../utils/cacheHandle";

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
  const { startLoading, stopLoading } = useLoading();

  const fetchUserData = async () => {
    try {
      if (user) {
        return;
      }
      startLoading();
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
    } finally {
      stopLoading();
    }
  };

  return (
    <UserContext.Provider value={{ user, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
}
