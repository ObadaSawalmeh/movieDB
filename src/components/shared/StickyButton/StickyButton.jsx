import { useFooterVisibility } from "hooks/useFooterVisibility";
import { useEffect, useRef } from "react";
import { StyledStickyButton } from "./StickyButton.styles";

export const StickyButton = ({
  children,
  onClick,
  isActive = false,
  isVisible = true,
  className = "",
  ...props
}) => {
  const { isFooterVisible, footerHeight } = useFooterVisibility();
  const buttonRef = useRef(null);

  useEffect(() => {
    // Add initial mount class for slide-in animation
    if (buttonRef.current) {
      buttonRef.current.classList.add("initial-mount");
      const timer = setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.classList.remove("initial-mount");
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <StyledStickyButton
      ref={buttonRef}
      onClick={onClick}
      $isActive={isActive}
      $isFooterVisible={isFooterVisible}
      $footerHeight={footerHeight}
      className={className}
      {...props}
    >
      {children}
    </StyledStickyButton>
  );
};
