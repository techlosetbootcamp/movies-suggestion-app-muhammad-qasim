import { useState, useEffect } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

const useSearchInputNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  const [showInput, setShowInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setInputValue(searchQuery ?? "");
  }, [searchQuery]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.length > 0) {
      navigate(`/search?query=${inputValue}`);
    }
  };

  const isSearch = location.pathname === "/search";

  return {
    showInput,
    setShowInput,
    inputValue,
    setInputValue,
    isSearch,
    handleKeyDown,
  };
};

export default useSearchInputNavigation;
