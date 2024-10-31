import { useEffect, useState } from "react";
import { onQueryUser } from "../../api/user.api";

const useSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [userList, setUserList] = useState([]);

  const fetchUsername = async () => {
    try {
      const data = await onQueryUser(searchQuery);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchUsername();
    }
  }, [searchQuery]);

  const filteredUsernames = userList.filter((username) =>
    username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setSearchQuery(value);
    onSearch?.(value);
  };

  const onSearch = (value) => {
    console.log(value);
  };

  return {
    searchQuery,
    handleInputChange,
    setIsFocused,
    isFocused,
    filteredUsernames,
    onSearch,
    setSearchQuery,
  };
};

export default useSearchBar;
