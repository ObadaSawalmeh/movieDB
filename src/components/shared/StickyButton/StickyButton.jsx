import { StyledStickyButton } from "./StickyButton.styles";

export const StickyButton = ({ 
  children, 
  onClick, 
  isActive = false, 
  isVisible = true,
  className = "",
  ...props 
}) => {
  if (!isVisible) return null;

  return (
    <StyledStickyButton
      onClick={onClick}
      $isActive={isActive}
      className={className}
      {...props}
    >
      {children}
    </StyledStickyButton>
  );
};
