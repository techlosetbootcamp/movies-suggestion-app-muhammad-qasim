import { useState, useEffect } from "react";

const useCustomInput = (searchQuery: string | null) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setInputValue(searchQuery ?? "");
  }, [searchQuery]);

  return {
    showInput,
    setShowInput,
    inputValue,
    setInputValue,
  };
};

export default useCustomInput;
