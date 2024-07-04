import { useState, useEffect } from "react";

const useReviewCountFormatter = (count: number | undefined) => {
  const [formattedCount, setFormattedCount] = useState<string>("");

  useEffect(() => {
    const formatReviewCount = (count: number) => {
      if (count >= 1000 && count < 1000000) {
        return `${(count / 1000).toFixed(1)}k`;
      } else if (count >= 1000000) {
        return `${(count / 1000000).toFixed(1)}M`;
      } else {
        return count.toString();
      }
    };

    if (typeof count === "number") {
      setFormattedCount(formatReviewCount(count));
    } else {
      setFormattedCount("");
    }
  }, [count]);

  return formattedCount;
};

export default useReviewCountFormatter;
