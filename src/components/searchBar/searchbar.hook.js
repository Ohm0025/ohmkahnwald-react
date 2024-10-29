import { useState } from "react";

const useSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const sampleUsernames = ["john_doe", "jane_smith", "alex123", "sarah.dev"];

  const filteredUsernames = sampleUsernames.filter((username) =>
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
