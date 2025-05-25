import { useEffect, useRef } from "react";
import {
  TooltipContainer,
  TooltipContent,
  TooltipItem,
} from "./Tooltip.styles";

const Tooltip = ({ options, isVisible, onOptionClick }) => {
  const tooltipRef = useRef(null);

  // Handle clicks outside tooltip to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        // Optional: You can add a callback here to close the tooltip
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <TooltipContainer ref={tooltipRef} isVisible={isVisible}>
      <TooltipContent>
        {options.map((option, index) => (
          <TooltipItem
            key={index}
            onClick={() => onOptionClick && onOptionClick(option)}
          >
            {option}
          </TooltipItem>
        ))}
      </TooltipContent>
    </TooltipContainer>
  );
};

export default Tooltip;
