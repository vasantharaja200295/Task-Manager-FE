import React, { useState, useEffect, useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/ui/tooltip";

const EllipsisText = ({ text, className }) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current.scrollHeight > textRef.current.clientHeight) {
      setIsOverflowing(true);
    } else {
      setIsOverflowing(false);
    }
  }, [text]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <p
          ref={textRef}
          className={`overflow-hidden line-clamp-5 ${
            isOverflowing ? "cursor-pointer" : ""
          } ${className || ""}`}
          style={{ maxWidth: "100%" }} // Adjust the max width as needed
        >
          {text}
        </p>
      </TooltipTrigger>
      {isOverflowing && (
        <TooltipContent className=" text-wrap w-[300px]">{text}</TooltipContent>
      )}
    </Tooltip>
  );
};

export default EllipsisText;
