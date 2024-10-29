import {
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  List,
  ListItem,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { Search } from "lucide-react";
import useSearchBar from "./searchbar.hook";

const SearchBar = () => {
  const {
    searchQuery,
    handleInputChange,
    setIsFocused,
    isFocused,
    filteredUsernames,
    onSearch,
    setSearchQuery,
  } = useSearchBar();

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const hoverBgColor = useColorModeValue("gray.50", "gray.700");

  return (
    <Box position="relative" width="80%" marginX={"auto"} marginY={5}>
      <InputGroup size="md">
        <InputLeftElement pointerEvents="none">
          <Search color="gray" fontSize="sm" />
        </InputLeftElement>
        <Input
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search username..."
          size="md"
          variant="outline"
          bg={bgColor}
          borderColor={borderColor}
          borderRadius="md"
          _hover={{ borderColor: "gray.400" }}
          _focus={{
            borderColor: "blue.400",
            boxShadow: "none",
          }}
        />
      </InputGroup>

      {/* Suggestions dropdown */}
      {isFocused && searchQuery && filteredUsernames.length > 0 && (
        <List
          position="absolute"
          width="100%"
          mt={1}
          bg={bgColor}
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="md"
          boxShadow="sm"
          zIndex={10}
          maxH="200px"
          overflowY="auto"
        >
          {filteredUsernames.map((username, index) => (
            <ListItem
              key={index}
              px={4}
              py={2}
              _hover={{ bg: hoverBgColor, cursor: "pointer" }}
              onClick={() => {
                setSearchQuery(username);
                onSearch?.(username);
                setIsFocused(false);
              }}
            >
              <Flex align="center">
                <Text fontSize="sm">{username}</Text>
              </Flex>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default SearchBar;
